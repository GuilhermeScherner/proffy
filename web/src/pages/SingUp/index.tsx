import React from 'react'
import StructSign from '../../components/StructSign';
import InputSign from '../../components/InputSign';

import './styles.css'

function SignUp(){
  return(
    <StructSign fst="right" snd="left">
      <h1>Cadastro</h1>
      <div className="subtitle">
        <p>Preenhca os dados abaixo para começar.</p>
      </div>
      <form action="">
      <InputSign type="text" spanText="Nome"></InputSign>
      <InputSign type="text" spanText="Sobrenome"></InputSign>
      <InputSign type="email" spanText="E-mail"></InputSign>
      <InputSign type="password" spanText="Senha"></InputSign>
      </form>

      <button type="submit">Concluir Cadastro</button>
    </StructSign>
  )
}

export default SignUp

