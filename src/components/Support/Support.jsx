import style from './Support.module.css';
import { useLocation } from 'react-router-dom'

export default function Support() {
    const location = useLocation();
    const { user } = location.state || { packageName: "Sin paquete", features: [] };
    const test = ()=>{
        console.log(user)
    }
    test()

    return (
        <>
            <div className={style.supportContainer}>
                <h1 className={style.supportTitle}>Soporte Técnico</h1>
                <p className={style.supportText}>
                    ¿Tienes problemas? Estamos aquí para ayudarte.  
                    Elige una opción para contactar con nuestro equipo de soporte.
                </p>

                <div className={style.supportCards}>
                    {[
                        /* { title: "Chat en Vivo", icon: "💬", link: "#" }, */
                        { title: "Correo Electrónico", icon: "📧", link: "/support-form" },
                        { title: "Llamada Telefónica", icon: "📞", link: "/phone-called" },
                        /* { title: "Preguntas Frecuentes", icon: "❓", link: "#" },
                        { title: "Reportar un Problema", icon: "⚠️", link: "#" },
                        { title: "Foro de Ayuda", icon: "📝", link: "#" } */
                    ].map((item, index) => (
                        <div key={index} className={style.supportCard}>
                            <span className={style.supportIcon}>{item.icon}</span>
                            <h2 className={style.supportTitle}>{item.title}</h2>
                            <button className={style.supportButton} onClick={() => window.location.href = item.link}>
                                Acceder
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
