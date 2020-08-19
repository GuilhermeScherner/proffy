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
          <p>Sua plataforma de estudos online.</p>
        </div>
      </div>
      <div className="form-login">
        <p className="text-login">Fazer login</p>   
        <form>
          <div className="input-login">
            <div className="input-email">
              <div>
              <input type="text" />
              <span>E-mail</span>
              </div>
            </div>
            <div className="input-password">
              <div>
                <input type="password"/>
                <span>Senha</span>
              </div>
            </div>
          </div>
          </form>
          <div className="forget-login">
            <div className="remind-login">
              <input type="checkbox" id="check" name="cb" />
              <label htmlFor="check">Lembrar-me</label>
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
        
      </div>
    </div>
  );
}

export default Login;