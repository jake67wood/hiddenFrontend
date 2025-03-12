import style from "./About.module.css";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <div>
        <section className={style.aboutContainer}>
            <h1 className={style.aboutTitle}>Acerca de Nosotros</h1>
            <p className={style.aboutSubtitle}>
                Conoce más sobre nuestro equipo y nuestra misión.
            </p>

            <div className={style.aboutContent}>
                <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                    alt="Equipo trabajando"
                    className={style.aboutImg}
                />

                <p className={style.aboutText}>
                    Somos un equipo de cinco amigos que compartimos una pasión por la tecnología y el emprendimiento. Nos conocimos en la universidad mientras estudiábamos desarrollo de software y, desde entonces, nuestra amistad y visión han crecido junto con nuestras habilidades.

                    Desde el primer día, nuestro objetivo ha sido desarrollar una plataforma intuitiva, segura y accesible que ayude a los usuarios a tener mejor control de sus dispositivos moviles.

                    Hoy, después de dos años de trabajo, seguimos mejorando nuestra aplicación, escuchando a nuestros usuarios y adaptándonos a sus necesidades.
                </p>
            </div>
        </section>
        <Footer />
    </div>
  );
}
