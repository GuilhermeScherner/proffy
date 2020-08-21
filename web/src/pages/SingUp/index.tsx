import React from 'react'
import StructSign from '../../components/StructSign';
import InputSign from '../../components/InputSign';

import './styles.css'

function SignUp(){
  return(
    <StructSign fst="left" snd="right">
      <InputSign type="text" spanText="Nome"></InputSign>
      <InputSign type="text" spanText="Sobrenome"></InputSign>
      <InputSign type="email" spanText="E-mail"></InputSign>
      <InputSign type="password" spanText="Senha"></InputSign>
    </StructSign>
  )
}

export default SignUp

