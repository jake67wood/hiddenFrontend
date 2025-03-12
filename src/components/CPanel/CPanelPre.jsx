import style from './CPanel.module.css';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom'

export default function CPanelPre() {
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
                        { title: "PC", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-xQ2J3o1ma6YVcw4Vt45THLZf-7rDflNsA&s", link: "/actiontool" },
                        { title: "El archivo de la PC", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEvbNI1oVaxjA8yb9aWN-aXmUyyQo7D0SQg&s", link: "/actiontool" },
                        { title: "El archivo de la PC (Agregando)", img: "https://www.pngall.com/wp-content/uploads/2/Upload-PNG-High-Quality-Image.png", link: "/actiontool" }
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
