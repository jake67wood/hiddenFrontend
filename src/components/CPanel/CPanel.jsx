import style from './CPanel.module.css';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom'

export default function CPanel() {
    const navigate = useNavigate(); // Inicializar useNavigate

        // Función para redirigir y enviar datos
    const handleNavigate = (appName) => {
        navigate("/actiontool", { state: { appname: appName } });
    };
    return (
        <>
            <div className={style.cpanelContainer}>
                <h2 className={style.cpanelTitle}>Bienvenid@ a tu panel de administración</h2>
                <p className={style.cpanelSubTitle}>Tu tienes el control</p>

                <div className={style.cpanelContent}>
                    {[
                        { title: "Galería", img: "https://cdn-icons-png.flaticon.com/512/8377/8377243.png", link: "/actiontool" },
                        { title: "Ubicación", img: "https://cdn-icons-png.flaticon.com/512/5323/5323926.png", link: "/actiontool" },
                        { title: "WhatsApp", img: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/whatsapp-512.png", link: "/actiontool" },
                        { title: "Facebook", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png", link: "/actiontool" },
                        { title: "Cámara", img: "https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Camera-512.png", link: "/actiontool" },
                        { title: "Micrófono", img: "https://cdn-icons-png.freepik.com/512/8862/8862366.png", link: "/actiontool" }
                    ].map((item, index) => (
                        <div key={index} className={style.cpanelItem}>
                            <h2 className={style.cpanelItemTitle}>{item.title}</h2>
                            <img className={style.cpanelItemImg} src={item.img} alt={item.title} />
                            <button className={style.cpanelItemButton} onClick={() => handleNavigate(item.title)}>
                                Ir a la App
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
        
    );
}
