import React, { useState, useEffect } from "react";
import "./Wallet.css";
import { profileData as userData, transactions } from "../Profile/data.js";
import { RiCloseFill } from "react-icons/ri";
import Fund from "./FundWallet/Fund";
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';

const Wallet = (props) => {
  // Declaring States

  const [details, getDetails] = useState({});
  const [hideBalance, setHideBalance] = useState(false);
  const [fundWallet, setFundWallet] = useState(false);
  const [amount, setAmount] = useState();

  const config = {
    reference: (new Date()).getTime(),
    email: userData[0].email,
    amount: amount,
    publicKey: process.env.REACT_APP_API_KEY,
};

  // State Handlers

  const setAmountHandler = (e) => {
    e.preventDefault();
    const formatMoney = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(e.target.value);
    console.log(formatMoney);
    setAmount(formatMoney);
  };
  const showHideClassName = fundWallet
    ? "Fund DisplayBlock"
    : "Fund DisplayNone";
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

  return (
    <div className="Wallet">
      {/* Fund Modal */}

      <Fund
        children={
          <div className={showHideClassName}>
            <div className="Box">
              <div className="FundHero">
                <h2 className="FundHeading">Fund Repify Wallet</h2>
                <div className="CloseModal">
                  <RiCloseFill
                    className="CloseIcon"
                    onClick={fundWalletHandler}
                  />
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
                <button type="submit" className="FundBtn">
                  Fund
                </button>
              </div>
            </div>
          </div>
        }
      />

      {/* Main Body Starts Here */}

      <div className="WalletHero">
        <div className="HeroTexts">
          <h1 className="HeroHeading">Wallet</h1>
          <p className="SmallText">{`Hello, ${details.firstName} Welcome Back`}</p>
        </div>
        <div className="HeroBtn">
          <p className="FundWallet" onClick={fundWalletHandler}>
            FundWallet
          </p>
        </div>
      </div>
      <div className="WalletBody">
        <div className="WalletCard WalletAccount">
          <div className="CardItems">
            <h5 className="CardHeading">Repify Balance</h5>
            {hideBalance ? (
              <h3 className="WalletBalance">&#8358; {details.balance}</h3>
            ) : (
              <h3 className="WalletBalance">&#8358; X X X</h3>
            )}
            <p className="HideIt" onClick={hideBalanceHandler}>
              Hide Balance
            </p>
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
