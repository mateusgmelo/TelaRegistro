import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="logo-container">
        <img src="public/monstack2.png" alt="Monstack Logo" className="logo" />
      </div>
      <h2>Cadastro</h2>
      <form className="register-form">
        <div className="input-group">
          <label htmlFor="username">Usuário</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirmar Senha</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <button type="submit" className="register-button">Cadastrar</button>
        <div className="login-link">
          <span>Já tem uma conta? <a href="#">Login</a></span>
        </div>
        <div className="separator">Ou</div>
        <button type="button" className="google-login">Login com Google</button>
      </form>
    </div>
  );
};

export default Register;