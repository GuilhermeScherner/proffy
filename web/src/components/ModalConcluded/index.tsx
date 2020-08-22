import React from 'react';

import feitoIcon from '../../assets/images/icons/Feito.svg'

import './styles.css';

interface ModalConcludedProps{
  title: string;
  text: string;
  buttonFunc: string;
}

const ModalConcluded: React.FC<ModalConcludedProps> = () => {
  return (
    <div className="modal-conclueded">
      <div className="container">
      <img src={feitoIcon} alt=""/>
      <h1>Cadastro salvo!</h1>
      <p>Tudo certo, seu cadastro está na nossa lista de professores. <br/>
      Agora é so ficar de olho no seu WhatsApp.
      </p>
      <button>Acessar</button>      
      </div>

    </div>
    )
}

export default ModalConcluded;