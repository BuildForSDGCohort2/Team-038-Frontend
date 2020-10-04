import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../Modals/Modal";
import "./BeneficiariesModal.css";
import Axios from "../../lib/client"

const BeneficiariesModal = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [duration, setDuration] = useState("DEFAULT");

  const handleDuration = (e) => {
    console.log(e.target.value);
    setDuration(e.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal
      modalClassName={props.isTrue}
      boxClassName={props.isTrue}
      closeModalFunction={props.clicked}
      heading={"Add Beneficiaries"}
    >
      <div className="BeneficiaryInput">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="BeneficiaryLabel">
            Beneficiaries Id
            <input
              ref={register({ required: true })}
              type="text"
              className="BeneficiaryContent"
              name="beneficiary_email"
              placeholder="Users Email or Repify ID"
            />
            {errors.beneficiary_email && "Email or Id is required."}
          </label>
          <label className="BeneficiaryLabel">
            When should we pay?
            <input
              ref={register({ required: true, pattern: /\d+/ })}
              type="number"
              className="BeneficiaryContent"
              placeholder="Day in a month"
              name="pay_date"
            />
            {errors.pay_date && "Please enter day between 1 - 28"}
          </label>
          <label className="BeneficiaryLabel">
            Duration
            <select
              className="BeneficiarySelect"
              name="duration"
              ref={register({ required: true })}
              value={duration}
              onChange={handleDuration}
            >
              <option value="DEFAULT" name="DEFAULT" disabled>
                Select a duration
              </option>
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
              <option value="recursive" name="recursive">
                Recursive
              </option>
            </select>
          </label>
          <label className="BeneficiaryLabel">
            Amount
            <input
              ref={register({ required: true })}
              type="number"
              className="BeneficiaryContent"
              placeholder="How much should we send?"
              name="amount"
            />
            {errors.amount && "An amount is required."}
          </label>
          <label className="BeneficiaryLabel">
            Description
            <input
              ref={register({ required: true })}
              type="text"
              minLength="10"
              className="BeneficiaryContent"
              placeholder="What is it for?"
              name="tag"
            />
            {errors.tag && "Please enter a minimum of 10 words"}
          </label>
          <input
            onClick={props.clicked}
            type="submit"
            className="BeneficiaryBtn"
          />
        </form>
      </div>
    </Modal>
  );
};

export default BeneficiariesModal;

// State Management

//   const [beneficiaryEmail, setBeneficiaryEmail] = useState();
//   const [amount, setAmount] = useState();
//   const [payDate, setPayDate] = useState();
//   const [duration, setDuration] = useState();
//   const [description, setDescription] = useState();

//   const wordsHandler = (event) => {
//     setWords(event.target.value);
//   };
