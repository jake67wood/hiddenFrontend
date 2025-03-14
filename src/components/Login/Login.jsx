import React, { useState } from 'react';
import style from './Login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function Login({ setUser }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('https://hiddenserver-i7sc.onrender.com/api/auth/login', { username, password }, { withCredentials: true });

			if (res.status === 200) {
				console.log(res.data.user);
				console.log(res.data.message);
				setError('');
				setUser(res.data.user);
				navigate('/');
			} else if (res.status === 401) {
				setError(res.data.message);
			}
		} catch (error) {
			if (error.response) {
				setError(error.response.data.message);
			}
		}
	};
	
	return (
		<>
		<div className={style.formLoginContainer}>
			<h3 className={style.formLoginTitle}><b>Iniciar Sesión</b></h3>
			<p className={style.formLoginSubTitle}>No compartiremos tu información con nadie</p>
			
			<form className={style.formLogin} onSubmit={handleSubmit} method='POST'>
				<div className={style.formLoginGroup}>
					<label htmlFor="email" className={style.formLoginLabel}>Correo</label>
					<input className={style.formLoginInput} type="text" name="email" placeholder="Correo" value={username} onChange={(e) => setUsername(e.target.value)} required />
				</div>

				<div className={style.formLoginGroup}>
					<label htmlFor="password" className={style.formLoginLabel}>Contraseña</label>
					<input className={style.formLoginInput} type="password" name="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
				</div>

				<p className={style.formLoginError}>{error}</p>
					
				<button className={style.formLoginButton} type="submit">Iniciar Sesión</button>

				<p className={style.formLoginNoExistAccount}>¿Aún no tienes cuenta? <a href="/registrarse">Haz clic aquí</a></p>
			</form>
		</div>
		<Footer />
		</>

	);
}
