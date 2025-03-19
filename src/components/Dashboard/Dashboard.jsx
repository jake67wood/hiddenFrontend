import style from './Dashboard.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Dashboard({ user }){
    const [ isPaid, setIsPaid ] = useState(0)
    const [ pack, setPack ] = useState('')
    const navigate = useNavigate(); // Inicializar useNavigate

    useEffect(() => {
        const dashboardInfo = async () => {
            try {
                const res = await axios.get(`https://hiddenserver-i7sc.onrender.com/api/auth/dashboard-info`, {
                    params: { us: user }
                });

                if (res.status === 200) {
                    setIsPaid(res.data.is_paid);
                    setPack(res.data.package);
                }
            } catch (error) {
                console.log('Error fetching data: ', error);
            }
        };
        dashboardInfo();
    }, [user]); // Se agrega `user` como dependencia para actualizar datos si cambia

        // Datos de cada paquete
    const packages = {
        Basico: ["* Galleria (Fotos y Videos)", "* Ubicación en tiempo real", "* Conversaciones de WhatsApp", "* Cuenta de Facebook", "* Camara (Tus otros ojos)", "* Microfono (Tus otros oidos)"],
        Premium: ["* Ver la PC remotamente en tiempo real", "* Descarga un archivo remotamente de una PC", "* Agrega un archivo remotamente a una PC"],
        Pro: ["* Consigue los contactos de una tarjeta SIM", "* Obten la lista de aplicaciones de un telefono", "* Cuenta de Correo Electronico (gmail, hotmail, yahoo etc.)", "Cuentas bancarias", "Cámaras de seguridad"]
    };

    const prices = {
        Basico: ["999.00", "99.00"],
        Premium: ["1,999.00", "199.00"],
        Pro: ["2,999.00", "299.00"]
    };

    // Función para redirigir y enviar datos
    const handleNavigate = (packageName) => {
        if (isPaid == 0) {
            navigate("/paypackage", { state: { packageName, features: packages[packageName], priceDefault: prices[packageName], user: user.username } });
        } else {
            navigate(`/cpanel-${packageName}`);
        }
    };

    // Función para verificar si el botón debe estar habilitado
    const isButtonEnabled = (packageName) => {
        if (isPaid == 0) {
            return true
        }
        if (pack == packageName) {
            return true
        }
        /* return isPaid == 0 || pack == packageName; */
    };

    // Función para definir el texto del botón
    const getButtonText = (packageName) => {
        if (isPaid === 0) {
            return "¡Quiero la oferta!";
        }
        return pack === packageName ? "Adquirido" : "¡Quiero la oferta!";
    };

    return (
        <>
            <div className={style.dashboardContainer}>
                <h2 className={style.dashboardTitle}>Bienvenido (a) a tu plataforma de confianza</h2>

                <div className={style.dashboardContent}>

                    <div className={style.dashboardItem}>
                        <h2 className={style.dashboardItemTitle}>Basico</h2>
                        <p className={style.dashboardItemP}>* Galleria (Fotos y Videos)</p>
                        <p className={style.dashboardItemP}>* Ubicación en tiempo real</p>
                        <p className={style.dashboardItemP}>* Conversaciones de WhatsApp</p>
                        <p className={style.dashboardItemP}>* Cuenta de Facebook</p>
                        <p className={style.dashboardItemP}>* Camara (Tus otros ojos)</p>
                        <p className={style.dashboardItemP}>* Microfono (Tus otros oidos)</p>
                        <div className={style.dashboardContentPrice}>
                            <p className={style.dashboardBefore}>Antes</p>
                            <p className={style.dashboardBeforePrice}>$999.00 USD</p>
                            <p className={style.dashboardOffer}>Offerta</p>
                            <p className={style.dashboardOfferPrice}>$99.00 USD</p>
                        </div>
                        <button 
                            className={style.dashboardButton} 
                            disabled={!isButtonEnabled("Basico")}
                            onClick={()=>handleNavigate('Basico')}
                        >
                            {getButtonText("Basico")}
                        </button>
                    </div>

                    <div className={style.dashboardItem}>
                        <h2 className={style.dashboardItemTitle}>Premium</h2>
                        <p className={style.dashboardItemP}>* Ver la PC remotamente en tiempo real</p>
                        <p className={style.dashboardItemP}>* Descarga un archivo remotamente de una PC</p>
                        <p className={style.dashboardItemP}>* Agrega un archivo remotamente a una PC</p>
                        <div className={style.dashboardContentPrice}>
                            <p className={style.dashboardBefore}>Antes</p>
                            <p className={style.dashboardBeforePrice}>$1,999.00 USD</p>
                            <p className={style.dashboardOffer}>Offerta</p>
                            <p className={style.dashboardOfferPrice}>$199.00 USD</p>
                        </div>
                        <button 
                            className={style.dashboardButton} 
                            disabled={!isButtonEnabled("Premium")}
                            onClick={()=>handleNavigate('Premium')}
                        >
                            {getButtonText("Premium")}
                        </button>
                    </div>

                    <div className={style.dashboardItem}>
                        <h2 className={style.dashboardItemTitle}>Pro</h2>
                        <p className={style.dashboardItemP}>* Consigue los contactos de una tarjeta SIM</p>
                        <p className={style.dashboardItemP}>* Obten la lista de aplicaciones de un telefono</p>
                        <p className={style.dashboardItemP}>* Cuenta de Correo Electronico (gmail, hotmail, yahoo etc.)</p>
                        <p className={style.dashboardItemP}>* Cuenta bancaria</p>
                        <p className={style.dashboardItemP}>* Camaras de Seguridad</p>
                        <div className={style.dashboardContentPrice}>
                            <p className={style.dashboardBefore}>Antes</p>
                            <p className={style.dashboardBeforePrice}>$2,999.00 USD</p>
                            <p className={style.dashboardOffer}>Offerta</p>
                            <p className={style.dashboardOfferPrice}>$299.00 USD</p>
                        </div>
                        <button 
                            className={style.dashboardButton} 
                            disabled={!isButtonEnabled("Pro")}
                            onClick={()=>handleNavigate('Pro')}
                        >
                            {getButtonText("Pro")}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
