import React from 'react';
import HeaderSign from '../HeaderSign';

import './styles.css';
interface StructSignProps {
  fst: string
  snd: string
}

const StructSign: React.FC<StructSignProps> = (props) => {
  return (
    <div id="page-login">
      <div className={`${props.fst}`}>
        <HeaderSign></HeaderSign>
      </div>

      <div className={`${props.snd}`}>
        <div className="form-login">
          {props.children}
        </div>
      </div>

  
    </div>

  );
}

export default StructSign;