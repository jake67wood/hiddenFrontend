import style from './PayPackage.module.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

export default function PayPackage(){
    const location = useLocation();
    const { packageName, features, priceDefault, user } = location.state || { packageName: "Sin paquete", features: [] };

    const handleOrder = async () => { 
        try {
            const today = new Date().toLocaleDateString();
    
            const res = await axios.post('http://localhost:5000/api/auth/paypal/create-order', {
                package: packageName, 
                isPaid: 1, 
                price: priceDefault[1], 
                date: today,
                email: user
            });
    
            if (res.status === 200) {
                console.log("Orden creada con éxito:", res.data);
                // Aquí puedes redirigir al usuario a la página de pago o mostrar una alerta
                window.location.href = res.data.links[1].href
            } else {
                console.log("Error en la respuesta del servidor:", res.data);
            }
    
        } catch (error) {
            console.error("Error al crear la orden:", error.response?.data || error.message);
        }
    };

    return (
        <>
            <div className={style.payPackageContainer}>
                <h2 className={style.payPackageTitle}>Solo falta un paso más para disfrutar de este beneficio</h2>

                <div className={style.payPackageContent}>
                    <div className={style.payPackageItem}>
                        <h2 className={style.payPackageItemTitle}>{packageName}</h2>

                        {features.length > 0 ? (
                            features.map((feature, index) => <p className={style.payPackageItemP} key={index}>{feature}</p>)
                        ) : (
                            <li>No hay información disponible</li>
                        )}
                        
                        <div className={style.payPackageContentPrice}>
                            <p className={style.payPackageBefore}>Antes</p>
                            <p className={style.payPackageBeforePrice}>${priceDefault[0]} USD</p>
                            <p className={style.payPackageOffer}>Offerta</p>
                            <p className={style.payPackageOfferPrice}>${priceDefault[1]} USD</p>
                        </div>
                        <a href="/cpanel">
                        <button
                        className={style.payPackageButton}
                        >
                            {packageName}
                        </button>
                        </a>
                    </div>
                    <div className={style.paypalMethodContainer}>
                        <h2 className={style.paypalMethodTitle}>Metodos de pago:</h2>
                        <button className={style.paypalMethodButton} onClick={handleOrder}>
                            PayPal
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}