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
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Senha"/>
          </div>
          <div>
            <input type="checkbox" name="" id=""/>
            <p>Lembrar-me</p>
            <a href="/">Esqueci minha senha</a>
          </div>
          <button type="submit">Entrar</button>
          <div className="footer-login">
            <p>Não tem conta?</p>
            <p>É de graça 
              <img src={heartIcon} alt="" />
            </p>
            <a href="/">Cadastre-se</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;