import React from "react";
import "./Modal.css";
import { RiCloseFill } from "react-icons/ri";

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
        <div className="FundHero">
          <h2 className="FundHeading">{props.heading}</h2>
          <div className="CloseModal">
            <RiCloseFill className="CloseIcon" onClick={props.closeModalFunction} />
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
