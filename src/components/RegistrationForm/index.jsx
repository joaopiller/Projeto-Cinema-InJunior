import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

RegistrationForm.propTypes = {
    handleSubmit: PropTypes.func,
};

export default function RegistrationForm({ handleSubmit }) {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        aniversario: '',
        username: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function submitForm(e) {
        e.preventDefault();
        if (formData.senha !== formData.confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }
        handleSubmit(formData);
    }

    return (
        <form onSubmit={submitForm} className={styles.registerBox}>
            <h2>Registre-se</h2>
            <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
            <input type="text" name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} required />
            <input type="text" name="aniversario" placeholder="Data de nascimento" value={formData.aniversario} onChange={handleChange} required />
            <input type="text" name="username" placeholder="Nome de Usuário" value={formData.username} onChange={handleChange} required />
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
            <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
            <input type="password" name="confirmarSenha" placeholder="Confirmar senha" value={formData.confirmarSenha} onChange={handleChange} required />
            <button type="submit">REGISTRAR</button>
        </form>
    );
}