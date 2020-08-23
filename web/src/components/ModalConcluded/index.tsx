import React from 'react';

import feitoIcon from '../../assets/images/icons/Feito.svg'
import bkIcon from '../../assets/images/success-background.svg'
import './styles.css';

interface ModalConcludedProps{
  title: string;
  text: [string, string];
  buttonText: string;
}

const ModalConcluded: React.FC<ModalConcludedProps> = (props) => {
  return (
    <div className="modal-conclueded">
      <div className="div-bk">
        <img src={bkIcon} alt=""/>
      </div>
      <div className="container">
        <img src={feitoIcon} alt=""/>
        <h1>{props.title}</h1>
        <p>{props.text[0]} <br/>
        {props.text[1]}
        </p>
        <button>{props.buttonText}</button>      
      </div>

    </div>
    )
}

export default ModalConcluded;