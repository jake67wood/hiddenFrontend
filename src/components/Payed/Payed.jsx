import style from './Payed.module.css';
import { Link } from 'react-router-dom';

export default function Payed(){
    return (
        <div className={style.payedContainer}>
            {/* Icono de pago exitoso */}
            <span className={style.payedIcon}>✅</span>
            
            {/* Mensaje de agradecimiento */}
            <h2 className={style.payedTitle}>¡Pago realizado con éxito!</h2>
            <p className={style.payedTxt}>
                Gracias por tu compra. Hemos recibido tu pago y tu paquete ha sido activado correctamente.
            </p>

            {/* Información del pago */}
            <div className={style.payedDetails}>
                <p>Te hemos enviado un correo eléctronico con los detalles de tu compra</p>
            </div>

            {/* Botón para regresar al inicio */}
            <Link to="/" className={style.payedButton}>
                Volver al inicio
            </Link>
        </div>
    );
}
