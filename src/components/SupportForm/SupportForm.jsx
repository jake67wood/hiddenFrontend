import { useState } from "react";
import style from "./SupportForm.module.css";
import axios from 'axios'

export default function SupportForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/support", formData);
            if (res.status === 200) {
                setSuccessMessage("Tu mensaje ha sido enviado con éxito. Te responderemos pronto.");
                setFormData({ name: "", email: "", subject: "", message: "" });
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    };

    return (
        <div className={style.supportContainer}>
            <h2 className={style.supportTitle}>Contáctanos</h2>
            <p className={style.supportText}>Si tienes algún problema o pregunta, escríbenos y te ayudaremos.</p>

            {successMessage && <p className={style.successMessage}>{successMessage}</p>}

            <form className={style.supportForm} onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label className={style.formLabel}>Nombre:</label>
                    <input className={style.formInput} type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label className={style.formLabel}>Correo electrónico:</label>
                    <input className={style.formInput} type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label className={style.formLabel}>Asunto:</label>
                    <input className={style.formInput} type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>

                <div className={style.formGroup}>
                    <label className={style.formLabel}>Mensaje:</label>
                    <textarea className={style.formTextarea} name="message" value={formData.message} onChange={handleChange} required />
                </div>

                <button className={style.formButton} type="submit">Enviar mensaje</button>
            </form>
        </div>
    );
}
