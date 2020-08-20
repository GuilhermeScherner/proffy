import React from 'react';
import './styles.css';


import heartIcon from '../../assets/images/icons/purple-heart.svg'
import InputSign from '../../components/InputSign';
import StructSign from '../../components/StructSign';


function Login() {
  return (
    <StructSign>
      <p className="text-login">Fazer login</p>
      <form>
        <div className="input-login">
          <InputSign type="text" spanText="E-mail"></InputSign>
          <InputSign type="password" spanText="Senha"></InputSign>
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
    </StructSign>

  );
}

export default Login;