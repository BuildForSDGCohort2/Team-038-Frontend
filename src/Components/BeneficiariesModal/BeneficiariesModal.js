import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../Modals/Modal";
import "./BeneficiariesModal.css";
import Axios from "../../lib/client";
import { FailedModal, SuccessModal } from "../StatusModal/StatusModal";

const BeneficiariesModal = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [duration, setDuration] = useState("DEFAULT");
  const [successStatus, setSuccessStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [failedStatus, setFailedStatus] = useState(false);
  const [failedMessage, setFailedMessage] = useState("");

  const handleSuccess = () => {
    setSuccessStatus(!successStatus);
  };

  const handleSuccessMessage = (message) => {
    setSuccessMessage(message);
  };

  const handleFailed = () => {
    setFailedStatus(!failedStatus);
  };

  const handleFailedMessage = (message) => {
    setFailedMessage(message);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  //   useEffect(() => {
  //     setFailedStatus(!failedStatus);
  //     // eslint-disable-next-line
  //   }, [setFailedMessage]);

  const onSubmit = (data) => {
    const token = localStorage.getItem("UserToken");
    return Axios.post(`/beneficiary?access_token=${token}`, data)
      .then((res) => {
        handleSuccessMessage(
          `Successfully added ${data.beneficiary_email} as a beneficiary`
        );
        handleSuccess();
      })
      .catch((err) => {
        if (err.response.data.hasOwnProperty("message")) {
          return (
              handleFailedMessage(err.response.data.message),
               handleFailed()
          );
        }
        return (
            handleFailedMessage("Something Doesn't seem right, try again"),
             handleFailed()
        );
      });
  };

  return (
    <>
      <SuccessModal
        isTrue={successStatus}
        text={successMessage}
        handleSetCloseModal={handleSuccess}
      />

      <FailedModal
        isTrue={failedStatus}
        text={failedMessage}
        handleSetCloseModal={handleFailed}
      />
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
                className="BeneficiaryContent"
                placeholder="What is it for?"
                name="title"
              />
              {errors.tag && "Please enter a description"}
            </label>
            <input
              onClick={failedStatus ? props.clicked : null}
              type="submit"
              className="BeneficiaryBtn"
            />
          </form>
        </div>
      </Modal>
    </>
  );
};

export default BeneficiariesModal;
