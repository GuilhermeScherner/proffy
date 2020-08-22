import React from 'react';

import './styles.css';
import StructSign from '../../components/StructSign';
import InputSign from '../../components/InputSign';
import ModalConcluded from '../../components/ModalConcluded';

function ForgotPage(){
  return(
    <>
    <StructSign fst="right" snd="left">
      <h1>Eita, esqueceu sua senha?</h1>
      <div className="subtitle">
        <p>Não esquenta, vamos dar um geito nisso.</p>
      </div>
      <form action="">
      <InputSign type="email" spanText="E-mail"></InputSign>
      </form>

      <button type="submit">Enviar</button>
    </StructSign>
    {true && <ModalConcluded title="a" text="sdnla" buttonFunc="slka"></ModalConcluded>}
    </>
  )
}

export default ForgotPage;