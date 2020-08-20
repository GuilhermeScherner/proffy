import React, { InputHTMLAttributes } from 'react';

import './styles.css';
interface InputSignProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  spanText: string;
}


const InputSign: React.FC<InputSignProps> = ({type, spanText}) => {
  return (
    <div className={`input-field`}>
      <div>
        <input type={type} />
        <span>{spanText}</span>
      </div>
    </div>


  );
}

export default InputSign;