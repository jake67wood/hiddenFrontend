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
                        { title: "Tarjeta SIM", img: "https://media.istockphoto.com/id/1151167437/es/vector/icono-de-simcard-en-blanco.jpg?s=612x612&w=0&k=20&c=9bUVD4gS9JHShzQzxMzuTovyYEgLeDBPtRXwJC5D4jU=", link: "/actiontool" },
                        { title: "Lista de aplicaciones del telefono", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKrK_3l9EidH2NKCDtnR5ttedp0jEzN3Ikw&s", link: "/actiontool" },
                        { title: "Cuenta de Correo Electronico", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDV-6Oji13RF1SIO3MLEQa3-8x77r7T-rDSw&s", link: "/actiontool" },
                        { title: "Cuenta bancaria", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfY97MeaCGenij4kXwt-BM_loQIxR_Wv-14w&s", link: "/actiontool" },
                        { title: "Camara(s) de Seguridad", img: "https://i.etsystatic.com/19543171/r/il/0d07f0/5326224933/il_300x300.5326224933_kyp2.jpg", link: "/actiontool" },
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
