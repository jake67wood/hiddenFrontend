import style from './Register.module.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        last_name: '',
        phone: '',
        address: '',
        email: '',
        city: '',
        country: '',
        password: '',
        confirmPassword: ''
    });

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            if (res.status === 201) {
                console.log(res.data.message);
                navigate('/login');
            }
        } catch (error) {
            console.error('Error inesperado: ', error);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit} method="POST" className={style.form}>
            <h2 className={style.formRegisterTitle}>Registrate</h2>
            <p className={style.formRegisterSubTitle}>La información que nos proporciones sera tratada confidencialmente</p>
            <div className={style.formGroup}>
                <label className={style.formLabel}>Nombre *</label>
                <input className={style.formInput} type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
            </div>

            <div className={style.formGroup}>
                <label className={style.formLabel}>Apellido *</label>
                <input className={style.formInput} type="text" name="last_name" placeholder="Apellido" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div className={style.formGroup}>
                <label className={style.formLabel}>Número de teléfono</label>
                <input className={style.formInput} type="text" name="phone" placeholder="Número de teléfono" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className={style.formGroup}>
                <label className={style.formLabel}>Correo *</label>
                <input className={style.formInput} type="email" name="email" placeholder="Correo" value={formData.email} onChange={handleChange} required />
            </div>

            <div className={style.formGroup}>
                <label className={style.formLabel}>Dirección</label>
                <input className={style.formInput} type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} required />
            </div>

            <div className={style.formGroup}>
                <label className={style.formLabel}>Ciudad</label>
                <input className={style.formInput} type="text" name="city" placeholder="Ciudad" value={formData.city} onChange={handleChange} required />
            </div>

            <div className={style.formGroup}>
                <label className={style.formLabel}>País</label>
                <input className={style.formInput} type="text" name="country" placeholder="País" value={formData.country} onChange={handleChange} required />
            </div>

            <div className={style.formGroup}>
                <label className={style.formLabel}>Contraseña *</label>
                <input className={style.formInput} type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
            </div>

            <div className={style.formGroup}>
                <label className={style.formLabel}>Confirmar contraseña *</label>
                <input className={style.formInput} type="password" name="confirmPassword" placeholder="Confirmar contraseña" value={formData.confirmPassword} onChange={handleChange} required />
            </div>

            <div className={style.termsPolicy}>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                <p className={style.termsPolicyText}>
                    Al registrarte aceptas los <a href="/terms-conditions">Términos y condiciones</a> y la <a href="/privacy-policy">Política de privacidad</a>.
                </p>
            </div>

            <button type="submit" disabled={!isChecked} className={isChecked ? style.enabledButton : style.disabledButton}>
                Registrarse
            </button>

            <p className={style.existAccount}>¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a></p>
        </form>
        <Footer />        
        </>

    );
};

export default Register;
