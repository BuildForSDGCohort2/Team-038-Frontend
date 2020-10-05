import React from "react";
import Modal from "../Modals/Modal";
import "./StatusModal.css";

const StatusModal = (props) => {
  return (
    <Modal
      modalClassName={props.isTrue}
      boxClassName={props.isTrue}
      closeModalFunction={props.clicked}
      heading={"This is the Benefactors Modal"}
    >
      <div className="FundInput">Hello</div>
    </Modal>
  );
};

export default StatusModal;
