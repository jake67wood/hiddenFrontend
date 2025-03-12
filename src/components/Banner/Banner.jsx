import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div id="carouselExampleCaptions" className={style.bannerContainer}>
      <div className={style.bannerContent}>
        <img
          className={style.bannerImg}
          src="https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg"
          alt="Banner"
        />
        <div className={style.bannerContentText}>
          <h5 className={style.bannerTitle}>Descubre lo que hace tu pareja cuando tu no estas</h5>
          <p className={style.bannerTxt}>
            ¿Sospechas que tu pareja esta viendo a alguien más a tus espaldas? enterate de una vez por todas prueba nuestra nueva Inteligencia Artificial unica en el mundo capaz de entrar en cualquier dispositivo a un costo muy bajo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
