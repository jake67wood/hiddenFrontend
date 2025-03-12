import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Nav.module.css"; // Importamos los estilos

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toStartCase = (string)=>{
    return string
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
  }
  const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  };

  return (
    <nav className={style.navbar}>
      <div className={style.containerFluid}>
        {/* Logo */}
        <a className={style.navbarBrand} href="/">
          {<img className={style.navbarImg} src={'./img/logo.png'} alt="Logo" width="100" />}
          {/* <h2>Secretos ocultos</h2> */}
        </a>

        {/* Botón hamburguesa para móviles */}
        <button className={style.navbarToggleButton} type="button" onClick={toggleMenu}>
          <span className={style.navbarTogglerIcon}>☰</span>
        </button>

        {/* Menú de navegación */}
        <div className={`${style.navbarCollapse} ${menuOpen ? style.show : ""}`} id="navbarSupportedContent">
          <ul className={style.navbarUl}>
              {["inicio", "paquetes", "iniciar sesion", "registrarse", "nosotros"].map((item, index) => (
                  <li key={index} className={style.navbarLi}>
                      {item === "paquetes" ? (
                          <button className={style.navbarButton} onClick={() => scrollToSection("package_id")}>
                              {toStartCase(item)}
                          </button>
                      ) : (
                          <NavLink className={({ isActive }) => (isActive ? "active" : "disable")}>
                              <Link to={`/${item === "iniciar sesion" ? "login" : item}`}>
                                  <button className={style.navbarButton}>{toStartCase(item)}</button>
                              </Link>
                          </NavLink>
                      )}
                  </li>
              ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
