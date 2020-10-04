import React from "react";
import Modal from "../Modals/Modal";
import "./BenefactorsModal.css";

const BenefactorsModal = (props) => {

  return (
    <Modal
      modalClassName={props.isTrue}
      boxClassName={props.isTrue}
      closeModalFunction={props.clicked}
      heading={"This is the Benefactors Modal"}
    >
      <div className="FundInput">
        <form>
          <p className="PlaceHolder">Share the love...</p>
          <input
            type="text"
            // onChange={setAmountHandler}
            className="FundAmount"
            placeholder="Users Email or Repify ID"
            // value={amount}
          />
          <button
            onClick={props.clicked}
            type="submit"
            className="FundBtn"
          >
            Add
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default BenefactorsModal;

/* 
<p className="PlaceHolder">Share the love...</p>
<input
          type="text"
          // onChange={setAmountHandler}
          className="FundAmount"
          placeholder="Users Email or Repify ID"
          // value={amount}
        />
        <p className="PlaceHolder">Share the love...</p>
        <input
          type="text"
          // onChange={setAmountHandler}
          className="FundAmount"
          placeholder="Users Email or Repify ID"
          // value={amount}
        />
        <p className="PlaceHolder">Share the love...</p>
        <input
          type="text"
          // onChange={setAmountHandler}
          className="FundAmount"
          placeholder="Users Email or Repify ID"
          // value={amount}
        />
        <p className="PlaceHolder">Share the love...</p>
        <input
          type="text"
          // onChange={setAmountHandler}
          className="FundAmount"
          placeholder="Users Email or Repify ID"
          // value={amount}
        /> */
