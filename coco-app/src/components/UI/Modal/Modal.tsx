import React, { ReactNode } from 'react';
import './Modal.css';

type Props= {
  handleClose:Function;
  show:boolean;
  children:ReactNode;
};

const Modal = ({ handleClose, show, children }:Props) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div
      className={showHideClassName}
      onClick={()=>handleClose()}
      role="button"
      tabIndex={0}
      onKeyPress={()=>handleClose()}
    >
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};
export default Modal;