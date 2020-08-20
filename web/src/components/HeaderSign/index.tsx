import React from 'react';

import './styles.css';
import imageBk from '../../assets/images/success-background.svg'
import logoImg from '../../assets/images/logo.svg'


function HeaderSign() {
  return (
    <div id="header-sign">
      <img src={imageBk} alt="" />
      <div className="header-logo">
        <img src={logoImg} alt="" />
        <p>Sua plataforma de estudos online.</p>
      </div>
    </div>

  );
}

export default HeaderSign;