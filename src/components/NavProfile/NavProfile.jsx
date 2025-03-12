import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavProfile.module.css"; // Importamos los estilos
import { useNavigate } from 'react-router-dom'

const NavProfile = ({ handleLogout, user }) => {
    const [menuOpenNav, setMenuOpenNav] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const navigate = useNavigate(); // Inicializar useNavigate

    const handleSupport = () => {
            navigate("/support", { state: { user } });
    };
    const toggleMenu = () => {
        setMenuOpenNav(!menuOpenNav);
    };

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!profileMenuOpen);
    };

    return (
        <nav className={style.navProfile}>
            <div className={style.navProfileContainer}>
                {/* Logo */}
                <a className={style.navProfileBrand} href="/">
                    <img className={style.navProfileImg} src={'./img/logo.png'} alt="Logo" width="100" />
                </a>

                {/* Botón hamburguesa para móviles */}
                <button className={style.navProfileToggleButton} type="button" onClick={toggleMenu}>
                    <span className={style.navProfileTogglerIcon}>☰</span>
                </button>

                {/* Menú de navegación para móviles */}
                <div className={`${style.navProfileCollapse} ${menuOpenNav ? style.show : ""}`} id="navbarSupportedContent">
                    <ul className={style.navProfileUl}>
                        <li className={style.navProfileLi}>
                            <button className={style.navProfileButton} onClick={toggleProfileMenu}></button>
                            {profileMenuOpen && (
                                <ul className={style.navProfileSubMenu}>
                                    <li className={style.navProfileSubMenuLi}>
                                            <button onClick={handleSupport} className={style.navProfileBtnCloseSession}>Soporte Técnico</button>
                                    </li>

                                    <li className={style.navProfileSubMenuLi}>
                                        <Link to="/" onClick={handleLogout}>
                                            <button className={style.navProfileBtnCloseSession} onClick={handleLogout}>Cerrar sesión</button>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavProfile;
