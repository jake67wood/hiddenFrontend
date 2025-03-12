import { useState, useEffect } from 'react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

export default function CartProducts() {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [isPaid, setIsPaid] = useState(false)
    
    useEffect(()=>{
        fetchCart()
    },[])
    
    useEffect(()=>{
        const total = cart.reduce((accu, item)=>accu + item.productPrice * item.quantity,0)
        setTotalPrice(total)
    },[cart])

    const fetchCart = async ()=>{
        try {
            const res = await axios.get('http://localhost:5000/api/auth/cart')
            setCart(res.data)
            console.log('useEffect')
        } catch (error) {
            console.error('Error en la peticion: ', error)
        }
    }

    const removeFromCart = async (productId)=>{
        try {
            await axios.post('http://localhost:5000/api/auth/cart/remove', { productId })
            fetchCart()
        } catch (error) {
            console.error('Error en la peticion: ',error)
        }
    }

    const updateCartItemQuantity = async (id, updateQuantity)=>{
        try {
            await axios.post('http://localhost:5000/api/auth/cart/updatequantity', { id, updateQuantity })
            fetchCart()
        } catch (error) {
            console.error('Error en la peticion: ',error)
        }
    }

    const createOrder = async ()=>{
        try {
            const res = await axios.post('http://localhost:5000/api/auth/paypal/create-payment',{
                totalPrice
            })
            return res.data.id
        } catch (error) {
            console.error('Error creating order:',error)
            return null
        }
    }
    
    const handleApprove = async (data, actions) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/paypal/capture-payment',{
                orderID: data.orderID
            })
            if (res.status === 200) {
                setIsPaid(true)
                alert('Pago realizado con exito')                
            }
        } catch (error) {
            console.error('Error capturing payment:',error)
        }
    }

    return (
        <div>
            <h1>Carrito de compras</h1>
            {(cart.length === 0) ?
                (<p>Carrito vacio</p>)
                : (
                    <div>
                        {cart.map((item)=>(
                            <div key={item.productId}>
                                <img src={`img/${item.productImg}`} alt="" />
                                <p>{item.productName}</p>
                                <p>${item.productPrice}.00</p>

                                <p>Cantidad</p>

                                <button onClick={()=>updateCartItemQuantity(item.productId, item.quantity + 1)}>+</button>

                                <p>{item.quantity}</p>

                                <button onClick={()=>updateCartItemQuantity(item.productId, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                                
                                <button onClick={() => removeFromCart(item.productId)}>Eliminar</button>
                            </div>
                        ))}
                        <div>
                            <p>Total: ${cart.length > 0 ? totalPrice.toFixed(2) : '0.00'}</p>
                        </div>
                    </div>
                )}
                <br /><br /><br />
                {!isPaid && (
                    <PayPalScriptProvider options={{'client-id':'AVXjM3euwE55uwd9okXsBeZh3MiCRDkpv6OStJGGMEtaWNBX78nhp51tgCymuJvWQy4IuAtXKCW7NUGp'}}>
                        <PayPalButtons
                        createOrder={createOrder}
                        onApprove={handleApprove}
                        onError={(err)=>{
                            console.error('Error con PayPal: ', err)
                            alert('Hubo un error al procesar el pago. Intenta nuevamente')
                        }}
                        />
                    </PayPalScriptProvider>

                )}

                {isPaid && <h3>Pago exitoso 🎉</h3>}
        </div>
    );

}