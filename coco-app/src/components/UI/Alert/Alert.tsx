import React  from 'react';
import './Alert.css';

type Props= {
  handleClose:Function;
  msg:string;
};

const Alert = ({ handleClose, msg }:Props) => (
  <div className="alert">
    <span
      className="closebtn"
      onClick={()=>handleClose()}
      role="button"
      tabIndex={0}
      onKeyPress={()=>handleClose()}
    >&times;
    </span>
    {msg}
  </div>
);
export default Alert;