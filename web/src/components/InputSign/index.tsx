import React, { InputHTMLAttributes, useState } from 'react';

import './styles.css';
interface InputSignProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  spanText: string;
}


const InputSign: React.FC<InputSignProps> = ({type, spanText}) => {
  const [email, setEmail] = useState("")
  return (
    <div className={`input-field`}>
      <div>
        <input type={type} value={email} onChange={e => setEmail(e.target.value)} />
        <span>{spanText}</span>
      </div>
    </div>


  );
}

export default InputSign;