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
          <label className="BeneficiaryLabel">
            Beneficiaries
            <input
              type="text"
              // onChange={setAmountHandler}
              className="BeneficiaryContent"
              name="beneficiary_email"
              placeholder="Users Email or Repify ID"
              // value={amount}
            />
          </label>
          <label className="BeneficiaryLabel">
            When should we pay?
            <input
              type="number"
              // onChange={setAmountHandler}
              className="BeneficiaryContent"
              placeholder="Day in a month"
              // value={amount}
            />
          </label>
          <label className="BeneficiaryLabel">
            Duration
            <select className="BeneficiarySelect">
              <option value="one_month" name="one_month">
                One Month
              </option>
              <option value="three_months" name="three_months">
                Three Months
              </option>
              <option value="six_months" name="six_months">
                Six Months
              </option>
              <option value="one_year" name="one_year">
                One Year
              </option>
            </select>
          </label>
          <label className="BeneficiaryLabel">
            Amount
            <input
              type="number"
              // onChange={setAmountHandler}
              className="BeneficiaryContent"
              placeholder="How much should we send?"
              name="amount"
              // value={amount}
            />
          </label>
          <label className="BeneficiaryLabel">
            Description
            <input
              type="text"
              // onChange={setAmountHandler}
              className="BeneficiaryContent"
              placeholder="What is it for?"
              name="tag"
              // value={amount}
            />
          </label>
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
