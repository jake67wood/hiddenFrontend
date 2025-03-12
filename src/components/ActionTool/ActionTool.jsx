import { useState } from 'react';
import style from './ActionTool.module.css';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom'

export default function ActionTool() {
    const [searching, setSearching] = useState(false);
    const [error, setError] = useState(false);
    const [searchStep, setSearchStep] = useState('');

    const location = useLocation();
    const { appname } = location.state || { packageName: "Sin paquete", features: [] };
    
    const startSearch = (e) => {
        e.preventDefault();
        setSearching(true);
        setError(false);
        setSearchStep(`Buscando información de ${appname}`);

        setTimeout(() => {
            setSearchStep(`Rescatando información de ${appname}`);
        }, 4000);

        setTimeout(() => {
            setSearchStep(`Preparando para mostrar información de ${appname}`);
        }, 8000);

        setTimeout(() => {
            // Simula un error aleatorio en el servidor
            if (1 < 2) {
                setError(true);
                setSearching(false);
                setSearchStep('Error en el servidor');
            } else {
                setSearching(false);
                setSearchStep('Información encontrada ✅');
            }
        }, 12000);
    };

    return (
        <>
            <div className={style.actionToolContainer}>
                <h2 className={style.actionToolTitle}>Este es tu entorno de trabajo</h2>
                <p className={style.actionToolSubTitle}>Escribe el número de telefono de la victima para accceder a su {appname}</p>

                <form className={style.actionToolForm} onSubmit={startSearch}>
                    <input className={style.actionToolInput} type="text" placeholder="Ingresa el número de télefono..." required />
                    <button className={style.actionToolButton}>Buscar</button>
                </form>
                <div className={style.actionToolResults}>
                    {searching && <span className={style.loadingIcon}></span>}
                    {error ? (
                        <span className={style.errorIcon}>{searchStep} ❌</span>
                    ) : (
                        searchStep
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
