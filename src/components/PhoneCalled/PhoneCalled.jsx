import style from './PhoneCalled.module.css';
import { Link } from 'react-router-dom';

export default function PhoneCalled() {
    return (
        <div className={style.PhoneCalledContainer}>
            {/* Icono de llamada */}
            <span className={style.PhoneCalledIcon}>📞</span>

            {/* Mensaje de contacto */}
            <h1 className={style.PhoneCalledTitle}>Contáctanos vía llamada telefónica</h1>
            <p className={style.PhoneCalledText}>+1 875 385 3924</p>

            {/* Botón para regresar */}
            <Link to="/" className={style.PhoneCalledButton}>
                Volver al inicio
            </Link>
        </div>
    );
}
