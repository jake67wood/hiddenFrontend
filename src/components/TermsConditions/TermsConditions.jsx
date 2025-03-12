import style from './TermsConditions.module.css';

export default function TermsConditions() {
    return (
        <div className={style.termsContainer}>
            <h1 className={style.termsTitle}>Términos y Condiciones</h1>

            <div className={style.termsContent}>
                <h2 className={style.termsSubtitle}>1. Introducción</h2>
                <p>Bienvenido a Secretos Ocultos IA. Al acceder y utilizar nuestros servicios, aceptas los siguientes términos y condiciones. Si no estás de acuerdo con ellos, no debes utilizar la Aplicación.</p>

                <h2 className={style.termsSubtitle}>2. Definiciones</h2>
                <ul>
                    <li><b>Usuario:</b> Toda persona que acceda y use la Aplicación.</li>
                    <li><b>Cliente:</b> Persona que compra servicios a través de la Aplicación.</li>
                </ul>

                <h2 className={style.termsSubtitle}>3. Uso de la Aplicación</h2>
                <p>La Aplicación permite a los usuarios entrar a dispositivos de forma segura.</p>

                <h2 className={style.termsSubtitle}>4. Pagos</h2>
                <p>Todos los pagos deben realizarse a través de los métodos habilitados en la Aplicación. Una vez confirmada la compra, el cliente recibirá un correo electrónico confirmando la compra.</p>

                <h2 className={style.termsSubtitle}>5. Cancelaciones y Reembolsos</h2>
                <p>Los reembolsos y cancelaciones no están disponibles para este servicio.</p>

                <h2 className={style.termsSubtitle}>6. Responsabilidades y Garantías</h2>
                <p>La aplicación no se hace responsable del mal uso que el usuario le pueda dar. Garantizamos la disponibilidad y la calidad de los servicios ofrecidos.</p>

                <h2 className={style.termsSubtitle}>7. Privacidad y Protección de Datos</h2>
                <p>La información personal de los usuarios se maneja según nuestra <a href="/privacy-policy">Política de Privacidad</a>.</p>

                <h2 className={style.termsSubtitle}>8. Modificaciones de los Términos</h2>
                <p>Nos reservamos el derecho de modificar estos términos en cualquier momento.</p>

                <h2 className={style.termsSubtitle}>9. Contacto</h2>
                <p>Si tienes dudas sobre estos términos, puedes iniciar sesión y contactarnos en la sección de soporte técnico en tu perfil.</p>
            </div>

        </div>
    );
}
