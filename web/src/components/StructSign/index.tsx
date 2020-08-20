import React from 'react';
import HeaderSign from '../HeaderSign';

import './styles.css';

const StructSign: React.FC = (props) => {
  return (
    <div id="page-login">
      <HeaderSign></HeaderSign>

      <div className="form-login">
      {props.children}
      </div>
    </div>

  );
}

export default StructSign;