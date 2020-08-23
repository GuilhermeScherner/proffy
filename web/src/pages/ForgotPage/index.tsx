import React from 'react';

import './styles.css';
import StructSign from '../../components/StructSign';
import InputSign from '../../components/InputSign';
import ModalConcluded from '../../components/ModalConcluded';
import backIcon from '../../assets/images/icons/Voltar.svg' 
import { Link } from 'react-router-dom';

function ForgotPage(){
  return(
    <>
    <StructSign fst="right" snd="left">
    <Link to="/"><img src={backIcon} alt=""/></Link>

      <h1>Eita, esqueceu sua senha?</h1>
      <div className="subtitle">
        <p>Não esquenta, vamos dar um geito nisso.</p>
      </div>
      <form action="">
      <InputSign type="email" spanText="E-mail"></InputSign>
      </form>

      <button type="submit">Enviar</button>
    </StructSign>
    {false && <ModalConcluded 
              title="Cadastro concluído"
              text={["Agora você faz parte da plataforma da Proffy", "Tenha uma ótima experiência."]}
              buttonText="Fazer Login"></ModalConcluded>}
    </>
  )
}

export default ForgotPage;