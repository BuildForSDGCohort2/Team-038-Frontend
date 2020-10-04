import React from "react";
import Modal from "../Modals/Modal";
import "./BeneficiariesModal.css";

const BeneficiariesModal = (props) => {
  return (
    <Modal
      modalClassName={props.isTrue}
      boxClassName={props.isTrue}
      closeModalFunction={props.clicked}
      heading={"Add Beneficiaries"}
    >
      <div className="BeneficiaryInput">
        <form>
          <input
            type="text"
            // onChange={setAmountHandler}
            className="BeneficiaryContent"
            name="beneficiary_email"
            placeholder="Users Email or Repify ID"
            // value={amount}
          />
          <label>
            When should we pay?
            <input
              type="date"
              // onChange={setAmountHandler}
              className="BeneficiaryContent"
              placeholder="When should we pay?"
              // value={amount}
            />
          </label>
          <input
            type="text"
            // onChange={setAmountHandler}
            className="BeneficiaryContent"
            placeholder="Users Email or Repify ID"
            // value={amount}
          />
          <input
            type="number"
            // onChange={setAmountHandler}
            className="BeneficiaryContent"
            placeholder="How much should we send?"
            name="amount"
            // value={amount}
          />
          <input
            type="text"
            // onChange={setAmountHandler}
            className="BeneficiaryContent"
            placeholder="What is it for?"
            name="tag"
            // value={amount}
          />
          <button
            onClick={props.clicked}
            type="submit"
            className="BeneficiaryBtn"
          >
            Add
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default BeneficiariesModal;
