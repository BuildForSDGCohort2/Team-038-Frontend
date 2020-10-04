import React, { useState, useEffect } from "react";
import "./Wallet.css";
import { profileData as userData, transactions } from "../Profile/data.js";
import Button from "../../Components/Button/Button";
import { usePaystackPayment } from "react-paystack";
import Modal from "../../Components/Modals/Modal";

const Wallet = (props) => {
  // Declaring States

  const [details, getDetails] = useState({});
  const [hideBalance, setHideBalance] = useState(true);
  const [fundWallet, setFundWallet] = useState(false);
  const [amount, setAmount] = useState();

  // State Handlers

  const setAmountHandler = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
    
  };

  const getUserData = () => {
    const profile = userData[0];
    getDetails(profile);
  };

  const hideBalanceHandler = () => {
    setHideBalance(!hideBalance);
  };

  const fundWalletHandler = () => {
    setFundWallet(!fundWallet);
  };

  //  ComponentDIdMount Alternative;

  useEffect(() => {
    getUserData();
  }, []);

  const reference = new Date().getTime();
  const apiKey = process.env.REACT_APP_ID;

  // Paystack Config
  const config = {
    reference,
    email: userData[0].email,
    amount: amount * 100,
    publicKey: apiKey,
    metadata: {
      name: userData[0].firstName,
      phone: userData[0].phone,
    },
    text: "Fund",
    onSuccess: () => null,
    onClose: () => null,
  };

  const initializePayment = usePaystackPayment(config);
  return (
    <div className="Wallet">
      {/* Fund Modal */}

      <Modal
        modalClassName={fundWallet}
        boxClassName={fundWallet}
        closeModalFunction={fundWalletHandler}
        heading={"Fund Repify Wallet"}
      >
        <div className="FundInput">
          <p className="PlaceHolder">How much do you want to fund?</p>
          <form>
            <input
              type="number"
              onChange={setAmountHandler}
              className="FundAmount"
              value={amount}
            />
          </form>
          <button
            onClick={() => {
              initializePayment();
              fundWalletHandler();
            }}
            type="submit"
            className="FundBtn"
          >
            Fund
          </button>
        </div>
      </Modal>

      {/* Main Body Starts Here */}

      <div className="WalletHero">
        <div className="HeroTexts">
          <h1 className="HeroHeading">Wallet</h1>
          <p className="SmallText">{`Hello, ${details.firstName} Welcome Back`}</p>
        </div>
        <div className="HeroBtn" onClick={fundWalletHandler}>
          <Button Title="Fund Wallet" to="#" />
        </div>
      </div>
      <div className="WalletBody">
        <div className="WalletCard WalletAccount">
          <div className="CardItems">
            <h5 className="CardHeading">Repify Balance</h5>
            <h3 className="WalletBalance">
              &#8358; {hideBalance ? details.balance : " X X X"}
            </h3>
            <div className="WalletTextGrouped">
              <p className="WalletLink BlueColor" onClick={fundWalletHandler}>
                Fund Account
              </p>
              <p className="HideIt" onClick={hideBalanceHandler}>
                {hideBalance ? "Hide Balance" : "Show Balance"}
              </p>
            </div>
          </div>
        </div>
        <div className="WalletCard WalletTrans">
          <div className="CardItems">
            <h5 className="CardHeading">Last Transactions</h5>
            {transactions.map((transaction) => (
              <div className="LastTransact" key={transaction.id}>
                <div className="CardHeading Bold"> {transaction.type} </div>
                {transaction.type === "Sent" ? (
                  <p className="Transact">
                    <span className="Money RedColor p1">
                      &#x20A6; {transaction.amount}
                    </span>
                    to {transaction.vendor}
                  </p>
                ) : (
                  <p className="Transact">
                    <span className="Money BlueColor p1">
                      &#8358; {transaction.amount}
                    </span>
                    from {transaction.vendor}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="ProfileCard">
          <div className="CardItems">
            <h3 className="UserName">
              {details.firstName} {details.SecondName}
            </h3>
            <h1 className="RepifyId">{details.userId}</h1>
            <p className="AccountType">{details.accountType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
