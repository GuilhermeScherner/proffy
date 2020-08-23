import React from 'react'
import StructSign from '../../components/StructSign';
import InputSign from '../../components/InputSign';
import ModalConcluded from '../../components/ModalConcluded';
import backIcon from '../../assets/images/icons/Voltar.svg' 
import { Link } from 'react-router-dom';
import './styles.css'

function SignUp(){
  return(
    <>
    
    <StructSign fst="right" snd="left">
      <Link to="/"><img src={backIcon} alt=""/></Link>

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
    {false && <ModalConcluded 
              title="Redefinição enviada!"
              text={["Boa, agora é só checar o e-mail que foi enviado para você", "redefinir sua senha e aproveitar os estudos."]}
              buttonText="Voltar ao lLogin"></ModalConcluded>}
    </>
  )
}

export default SignUp

