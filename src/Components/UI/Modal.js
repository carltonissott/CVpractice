import "../UI/styles.css";
import React from "react";

const Modal = (props) => {
  return (
    <div className="modal-background">
      <div className="modal-form">{props.children}</div>
    </div>
  );
};

export default Modal;
