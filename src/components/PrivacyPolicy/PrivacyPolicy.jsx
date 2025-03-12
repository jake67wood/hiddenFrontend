import style from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
    return (
        <div className={style.privacyContainer}>
            <h1 className={style.privacyTitle}>Política de Privacidad</h1>

            <div className={style.privacyContent}>
                <h2 className={style.privacySubtitle}>1. Introducción</h2>
                <p>En Secretos Ocultos AI, respetamos y protegemos tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.</p>

                <h2 className={style.privacySubtitle}>2. Información que Recopilamos</h2>
                <ul>
                    <li>Datos personales como nombre, correo electrónico y teléfono.</li>
                    <li>Información de pago para procesar transacciones.</li>
                    <li>Datos de navegación y preferencias para mejorar la experiencia del usuario.</li>
                </ul>

                <h2 className={style.privacySubtitle}>3. Uso de la Información</h2>
                <p>Utilizamos la información recopilada para:</p>
                <ul>
                    <li>Procesar compras y brindar soporte.</li>
                    <li>Mejorar nuestros servicios y personalizar tu experiencia.</li>
                    <li>Enviar actualizaciones y ofertas promocionales (puedes darte de baja en cualquier momento).</li>
                </ul>

                <h2 className={style.privacySubtitle}>4. Protección de la Información</h2>
                <p>Implementamos medidas de seguridad para proteger tu información contra accesos no autorizados.</p>

                <h2 className={style.privacySubtitle}>5. Compartición de Datos</h2>
                <p>No vendemos ni compartimos tu información con terceros, excepto cuando sea necesario para procesar pagos o cumplir con la ley.</p>

                <h2 className={style.privacySubtitle}>6. Tus Derechos</h2>
                <p>Puedes solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento.</p>

                <h2 className={style.privacySubtitle}>7. Cambios en la Política</h2>
                <p>Nos reservamos el derecho de actualizar esta política. Notificaremos los cambios en la aplicación.</p>

                <h2 className={style.privacySubtitle}>8. Contacto</h2>
                <p>Si tienes preguntas sobre esta política, puedes iniciar sesión y contactarnos en la sección de soporte técnico en tu perfil.</p>
            </div>

        </div>
    );
}
