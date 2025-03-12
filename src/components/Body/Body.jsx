import style from './Body.module.css';
import styleCount from './CountdownTimer.module.css'
import React, { useState, useEffect } from 'react'

export default function Products({ addToCart }) {
    const [showText, setShowText] = useState(true);
    const [visible, setVisible] = useState(false);
    const [visibleSoft, setVisibleSoft] = useState(false);
    
    // Calculamos la fecha límite sumando 3 días a la fecha actual
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 3);
    
    // Estado para la cuenta regresiva
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    function calculateTimeLeft() {
        const now = new Date();
        const difference = deadline - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
            expired: false
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    /* ------------------ SUSCRIPTION ------------------ */

    useEffect(() => {
        setTimeout(() => setVisible(true), 500);
        setTimeout(() => setVisibleSoft(true), 500);
    }, []);

    const opinions = [
        { id: 1, user: "Juan Pérez", opinion: "¡Excelente aplicación! Muy fácil de usar.", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, user: "María López", opinion: "Es algo lenta la aplicacion pero funciona me ayudó mucho con el telefono de mi esposo, gracias.", img: "https://randomuser.me/api/portraits/women/2.jpg" },
        { id: 3, user: "Carlos Sánchez", opinion: "Rápido y seguro, lo recomiendo.", img: "https://randomuser.me/api/portraits/men/3.jpg" },
        { id: 4, user: "Carlos Sanchez", opinion: "Me gusta la sencilles que tiene, no es necesario conocimientos técnicos.", img: "https://randomuser.me/api/portraits/men/4.jpg" },
        { id: 5, user: "Selene Alvarado", opinion: "Esta app me ayudo a saber que mi pareja no me es infiel.", img: "https://randomuser.me/api/portraits/women/3.jpg" },
        { id: 6, user: "Emilio Castro", opinion: "Gracias por abrirme los ojos.", img: "https://randomuser.me/api/portraits/men/5.jpg" }
    ];
    return (
        <div>
            <section className={style.welcomeSection}>
                <div className={style.welcomeContent}>
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oBTEYb4XowKnhDJag_nOg58NA8_gHVXle0ThOa3AUi6zaugcF2_KwqAofCNnzXE8uu4&usqp=CAU"
                    alt="Women"
                    className={style.welcomeImg}
                    />
                    <div className={style.welcomeContentText}>
                        <h1 className={style.welcomeTitle}>¿Sospechas que te ocultan algo importante?</h1>
                        {showText && (
                            <p className={style.welcomeTxt}>
                            Por primera vez una IA que te ayuda a tener el control total de un dispositivo movil. Contamos con un software capaz y eficiente que te da la Ubicación, conversaciones de WhatsApp, te enciende la camara en tiempo real y mucho más. Solo a un clic de distancia.
                            </p>
                        )}
                        <button onClick={() => setShowText(!showText)} className={style.toggleButton}>
                            {showText ? "Ocultar" : "Mostrar"} información
                        </button>
                    </div>
                </div>
            </section>

            <section className={style.who_we_areSection}>
                <div className={style.who_we_areContent}>
                    <div className={style.who_we_areContentText}>
                        <h1 className={style.who_we_areTitle}>¿Quienes somos?</h1>
                        <p className={style.who_we_areTxt}>
                            Somos un equipo de cinco apasionados por la tecnología e innovación, unidos por un propósito común: facilitar la gestión y administración de dispositivos a distancia. Nos conocimos mientras estudiábamos Ingeniería de Software en la Universidad de Valencia, donde descubrimos nuestra afinidad por el desarrollo de soluciones digitales.

                            Durante los últimos dos años, hemos trabajado arduamente en este proyecto, enfrentando desafíos técnicos y perfeccionando cada detalle de nuestra aplicación. Nuestro objetivo ha sido crear una plataforma intuitiva, eficiente y segura, que permita a los usuarios tener acceso a dispositivos como Moviles, tables y laptops. 🚀✨
                        </p>
                    </div>
                    <img
                    src="https://img.freepik.com/fotos-premium/grupo-jovenes-emprendedores-felices-manos-alto-riendo-celebrar-emocionados-exito-logros-obtenidos-estudiantes-pregrado-celebran-exito-despues-final-proyecto-concepto-trabajo-equipo_41689-3031.jpg"
                    alt="Women"
                    className={style.who_we_areImg}
                    />
                </div>
            </section>

            <section className={style.aiExperimentalContainer}>
                    <div className={style.aiExperimentalContent}>
                        <h1 className={style.aiExperimentalTitle}>IA Experimental</h1>
                        <p className={style.aiExperimentalTxt}>
                            Este software es un proyecto en fase experimental, diseñado para explorar y mejorar el uso de la inteligencia artificial en diferentes aplicaciones. Debido a su naturaleza en desarrollo, es posible que experimente errores o comportamientos inesperados.

                            Cada uso de esta IA contribuye a su entrenamiento y mejora, permitiéndonos optimizar su funcionamiento con el tiempo. Apreciamos tu retroalimentación mientras continuamos perfeccionando el sistema para ofrecer una experiencia más eficiente y precisa. 🚀
                        </p>
                    </div>
                    <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/036/105/045/small_2x/artificial-intelligence-ai-processor-chip-icon-symbol-for-graphic-design-logo-web-site-social-media-png.png"
                    alt="Women"
                    className={style.aiExperimentalImg}
                    />
            </section>

            <section className={style.mapsContainer}>
            <div className={style.mapsContent}>
                <h1 className={style.mapsTitle}>Ubicación en tiempo real</h1>
                <p className={style.mapsTxt}>
                    Nuestro sistema te permite visualizar la ubicación en tiempo real de tu pareja.
                    Gracias a la integración con mapas en vivo, siempre sabrás dónde está tu esposo(a) en cada momento.
                </p>
            </div>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Map_pin_icon.svg/768px-Map_pin_icon.svg.png"
                alt="Mapa en tiempo real"
                className={style.mapsImg}
            />
        </section>

            { /* Simulación de opiniones */ }
            <div className={style.opinionsContainer}>
                <h2 className={style.opinionsTitle}>Opiniones de nuestros usuarios</h2>
                <div className={style.opinionsContentFlex}>
                    {opinions.map(opinion => (
                        <div key={opinion.id} className={style.opinionsContentItem}>
                            <div className={style.opinionsContentItemContainerProfile}>
                                <img className={style.opinionsContentItemProfile} src={opinion.img} alt={opinion.user} />
                                <p className={style.opinionsContentUser}>{opinion.user}</p>
                            </div>
                            <p className={style.opinionsContentOpinion}>{opinion.opinion}</p>
                        </div>
                    ))}
                </div>
            </div>
                        
            <div className={style.packageIdContainer} id='package_id'>
                <h2 className={style.containerInfoSuscriptionSecurityTitle}>Solo para apoyarte te ofrecemos por tiempo limitado un descuento de 90% en todos nuestros paquetes</h2>

                <div className={styleCount.countdownContainer}>
                    <h2 className={styleCount.countdownTitle}>¡Oferta limitada! Termina en:</h2>
                    {!timeLeft.expired ? (
                        <div className={styleCount.countdownTimer}>
                            <div className={styleCount.timeBox}><span>{timeLeft.days}</span><small>Días</small></div>
                            <div className={styleCount.timeBox}><span>{timeLeft.hours}</span><small>Horas</small></div>
                            <div className={styleCount.timeBox}><span>{timeLeft.minutes}</span><small>Min</small></div>
                            <div className={styleCount.timeBox}><span>{timeLeft.seconds}</span><small>Seg</small></div>
                        </div>
                    ) : (
                        <p className={style.offerExpired}>⏳ La oferta ha finalizado ⏳</p>
                    )}
                </div>
                
                <div className={style.packageContainer}>
                    <div className={style.packageItem}>
                        <h2 className={style.packageTitle}>Basico</h2>
                        <p className={style.packageP}>* Galleria (Fotos y Videos)</p>
                        <p className={style.packageP}>* Ubicación en tiempo real</p>
                        <p className={style.packageP}>* Conversaciones de WhatsApp</p>
                        <p className={style.packageP}>* Cuenta de Facebook</p>
                        <p className={style.packageP}>* Camara (Tus otros ojos)</p>
                        <p className={style.packageP}>* Microfono (Tus otros oidos)</p>
                        <div className={style.packageContentPrice}>
                            <p className={style.packageBeforePrice}>Antes</p>
                            <p className={style.packagePriceBefore}>$999.00 USD</p>
                            <p className={style.packageOfferPrice}>Offerta</p>
                            <p className={style.packagePrice}>$99.00 USD</p>
                        </div>
                        <a href="/login">
                        <button className={style.packageButton}>¡Quiero la oferta!</button>
                        </a>
                    </div>

                    <div className={style.packageItem}>
                        <h2 className={style.packageTitle}>Premium</h2>
                        <p className={style.packageP}>* Ver la PC remotamente en tiempo real</p>
                        <p className={style.packageP}>* Descarga un archivo remotamente de una PC</p>
                        <p className={style.packageP}>* Agrega un archivo remotamente a una PC</p>
                        <div className={style.packageContentPrice}>
                            <p className={style.packageBeforePrice}>Antes</p>
                            <p className={style.packagePrice}>$1,999.00 USD</p>
                            <p className={style.packageOfferPrice}>Offerta</p>
                            <p className={style.packagePrice}>$199.00 USD</p>
                        </div>
                        <a href="/login">
                        <button className={style.packageButton}>¡Quiero la oferta!</button>
                        </a>
                    </div>

                    <div className={style.packageItem}>
                        <h2 className={style.packageTitle}>Pro</h2>
                        <p className={style.packageP}>* Consigue los contactos de una tarjeta SIM</p>
                        <p className={style.packageP}>* Obten la lista de aplicaciones de un telefono</p>
                        <p className={style.packageP}>* Cuenta de Correo Electronico (gmail, hotmail, yahoo etc.)</p>
                        <p className={style.packageP}>* Cuenta bancaria</p>
                        <p className={style.packageP}>* Camaras de Seguridad</p>
                        <div className={style.packageContentPrice}>
                            <p className={style.packageBeforePrice}>Antes</p>
                            <p className={style.packagePrice}>$2,999.00 USD</p>
                            <p className={style.packageOfferPrice}>Offerta</p>
                            <p className={style.packagePrice}>$299.00 USD</p>
                        </div>
                        <a href="/login">
                        <button className={style.packageButton}>¡Quiero la oferta!</button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className={style.containerInfoSuscriptionSecurity}>
                <div className={`${style.totalPayContainer} ${visible ? style.visible : ""}`}>
                    <h2 className={style.totalPayTitle}>¿Suscripción o un solo pago?</h2>
                    <p className={style.totalPayTxt}>
                        Nuestro servicio es de un solo pago anual, lo que significa que solo pagas una vez al año y disfrutas de todos los beneficios sin cargos mensuales ni costos adicionales ocultos.
                    </p>
                    <p className={style.totalPayTxt}>
                    🔹 Beneficios del pago único anual:
                    
                    </p>
                    <p className={style.totalPayTxt}>✔ Acceso completo a todas las funcionalidades.</p>
                    <p className={style.totalPayTxt}>✔ Sin preocupaciones por pagos recurrentes.</p>
                    <p className={style.totalPayTxt}>✔ Renovación sencilla al final del período.</p>

                    <p className={style.totalPayTxt}>
                        Con esta modalidad, te ofrecemos comodidad y transparencia, asegurando que tengas acceso continuo sin interrupciones durante todo un año. 🎯🚀
                    </p>
                </div>

                <div className={`${style.securityContainer} ${visibleSoft ? style.visibleSoft : ""}`}>
                    <h2 className={style.securityTitle}>No tienes que descargar nada, todo es en línea</h2>
                    <p className={style.securityTxt}>
                        Nuestra aplicación es 100% web, lo que significa que no necesitas descargar ni instalar ningún programa en tu dispositivo. Puedes acceder desde cualquier navegador, en cualquier lugar y momento, sin ocupar espacio en tu teléfono o computadora.
                    </p>
                    <p className={style.securityTxt}>🔹 Ventajas de nuestra aplicación web:</p>
                    <p className={style.securityTxt}>✔ Acceso inmediato sin descargas ni instalaciones.</p>
                    <p className={style.securityTxt}>✔ Compatible con cualquier dispositivo (PC, tablet y móvil).</p>
                    <p className={style.securityTxt}>✔ Seguridad y actualizaciones automáticas sin interrupciones.</p>
                    <p className={style.securityTxt}>Solo inicia sesión y comienza a usarla al instante. ¡Así de fácil y conveniente! 🚀</p>
                </div>
            </div>
        </div>
    );
};