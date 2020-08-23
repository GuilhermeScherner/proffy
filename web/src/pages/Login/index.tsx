import React from 'react';

import heartIcon from '../../assets/images/icons/purple-heart.svg'
import InputSign from '../../components/InputSign';
import StructSign from '../../components/StructSign';


import './styles.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <StructSign fst="right" snd="left">
      <p className="text-login">Fazer login</p>
      <form>
        <div className="input-login">
          <InputSign type="email" spanText="E-mail"></InputSign>
          <InputSign type="password" spanText="Senha"></InputSign>
        </div>
      </form>
      <div className="forget-login">
        <div className="remind-login">
          <input type="checkbox" id="check" name="cb" />
          <label htmlFor="check">Lembrar-me</label>
        </div>
        <Link to="/password_reset"><a href="/">Esqueci minha senha</a></Link>
      </div>
      <button type="submit">Entrar</button>
      <div className="footer-login">
        <div>
          <p>Não tem conta?</p>
          <Link to="/Signup"><a href="/">Cadastre-se</a></Link>
        </div>
        <p>É de graça
              <img src={heartIcon} alt="" />
        </p>
      </div>
    </StructSign>

  );
}

export default Login;