import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div
      className={
        props.modalClassName
          ? "Modal DisplayBlock OpenBox"
          : "Modal DisplayNone CloseBox"
      }
    >
      <div className={props.boxClassName ? "Box OpenBox" : "Box CloseBox"}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
