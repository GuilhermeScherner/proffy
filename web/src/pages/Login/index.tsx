import React from 'react';
import './styles.css';

import imageBk from '../../assets/images/success-background.svg'
import heartIcon from '../../assets/images/icons/purple-heart.svg'
import logoImg from '../../assets/images/logo.svg'

function Login(){
  return (
    <div id="page-login">
      <div className="header">
        <img src={imageBk} alt=""/>
        <div className="header-logo">
          <img src={logoImg} alt=""/>
          <p>Sua plataforma de estudos</p>
        </div>
      </div>
      <div className="form-login">
        <p className="text-login">Fazer login</p>   
        <form>
          <div className="input-login">
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Senha"/>
          </div>
          <div className="forget-login">
            <div className="remind-login">
              <input type="checkbox" name="" id=""/>
              <p>Lembrar-me</p>
            </div>
            <a href="/">Esqueci minha senha</a>
          </div>
          <button type="submit">Entrar</button>
          <div className="footer-login">
            <div>
              <p>Não tem conta?</p>
              <a href="/">Cadastre-se</a>
            </div>
            <p>É de graça 
              <img src={heartIcon} alt="" />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;