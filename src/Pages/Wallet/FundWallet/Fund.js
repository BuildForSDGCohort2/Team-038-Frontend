import React, { useState } from "react";
import "./Fund.css";
import { RiCloseFill } from "react-icons/ri";

const Fund = (props) => {
  const [amount, setAmount] = useState();
  const setAmountHandler = (e) => {
    e.preventDefault();
     const formatMoney = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(e.target.value)
     console.log(formatMoney);
    setAmount(formatMoney);
  };
  return (
    <div className="Fund">
      <div className="Box">
        <div className="FundHero">
          <h2 className="FundHeading">Fund Repify Wallet</h2>
          <div className="CloseModal">
            <RiCloseFill className="CloseIcon" onClick={props.function} />
          </div>
        </div>
        <div className="FundInput">
          <p className="PlaceHolder">How much do you want to fund?</p>
          <form>
            <input
              type="number"
              onChange={setAmountHandler}
              className="FundAmount"
              // value={amount}
            />
          </form>
        </div>
        <div className="BtnDiv">
          <p className="FoundBtn">Fund</p>
        </div>
      </div>
    </div>
  );
};

export default Fund;
