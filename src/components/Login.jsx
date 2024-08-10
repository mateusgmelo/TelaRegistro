import React from 'react';
import './Login.css';
import logo from '../../public/logo.png'; // Certifique-se de ter o logo na pasta public

const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="Monstack Logo" className="logo" />
      <h2>Faça seu Login</h2>
      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <div className="forgot-password">
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register">
          <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
        </div>
        <div className="separator">Ou</div>
        <button type="button" className="google-login">Login com Google</button>
      </form>
    </div>
  );
}

export default Login;
