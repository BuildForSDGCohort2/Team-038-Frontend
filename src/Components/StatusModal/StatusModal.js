import React from "react";
import Modal from "../Modals/Modal";
import "./StatusModal.css";

const SuccessModal = (props) => {
  return (
    <Modal
      modalClassName={props.isTrue}
      boxClassName={props.isTrue}
      closeModalFunction={props.clicked}
      heading={"Success"}
    >
      <div className="StatusDiv">
      <p className="StatusText">
          {props.text}
      </p>
        <img
          src="https://res.cloudinary.com/repify/image/upload/v1601862933/sucessful.svg"
          alt="Successful"
          className="SuccessImg"
        />
      </div>
    </Modal>
  );
};

const FailedModal = (props) => {
  return (
    <Modal
      modalClassName={props.isTrue}
      boxClassName={props.isTrue}
      closeModalFunction={props.clicked}
      heading={"Uh Oh (´•̥̥̥︿•̥̥̥` )"}
    >
      <div className="StatusDiv">
      <p className="StatusText">
          {props.text}
      </p>
        <img
          src="https://res.cloudinary.com/repify/image/upload/v1601862897/empty_state.svg"
          alt="Successful"
          className="FailedImg"
        />
      </div>
    </Modal>
  );
};

export { SuccessModal, FailedModal };
