import React, { useState, useEffect } from "react";
import "./Wallet.css";
import { transactions } from "../Profile/data.js";
import Button from "../../Components/Button/Button";
import { usePaystackPayment } from "react-paystack";
import Modal from "../../Components/Modals/Modal";
import getTokenDetails from "../../lib/jwt";
import Axios from "../../lib/client";

const Wallet = (props) => {
  // Declaring States

  const [hideBalance, setHideBalance] = useState(true);
  const [fundWallet, setFundWallet] = useState(false);
  const [amount, setAmount] = useState();

  const [getWallet, setGetWallet] = useState("");
  const [aboutUser, setAboutUser] = useState("");

  const showTrans = false;

  const getUserData = async () => {
    const token = localStorage.getItem("UserToken");
    const userInfo = await getTokenDetails(token);
    const userId = userInfo.payload[0].id;
    await Axios.get(`/user?access_token=${token}&user_id=${userId}`)
      .then(async (res) => {
        const wallet = await res.data.data[0];
        const main = await res.data.data[0].Wallet;
        setGetWallet(main);
        setAboutUser(wallet);
      })
      .catch((err) => err);
  };

  // State Handlers

  const setAmountHandler = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
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
  const apiKey = process.env.REACT_APP_ID || "pk_test_bff251fd2c3e8614d71595ffcbfc4dfd69f70b1f";

  // Paystack Config
  const config = {
    reference,
    email: aboutUser.email,
    amount: amount * 100,
    publicKey: apiKey,
    metadata: {
      name: aboutUser.name,
      phone: aboutUser.phone_number,
    },
    text: "Fund",
    callback: (data) => {
      let message = 'Payment complete! Reference: ';
      alert(message);
    },
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
          <p className="SmallText">{`Hello, ${aboutUser.name} Welcome Back`}</p>
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
              &#8358; {hideBalance ? getWallet.current_balance : " X X X"}
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
            <h5 className="CardHeading">
              {showTrans ? "Last Transactions" : "No Spendings Yet"}
            </h5>
            {showTrans ? (
              transactions.map((transaction) => (
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
              ))
            ) : (
              <div className="NoSpend">
                <p className="NoSpendText">
                  Your last transactions will show here
                </p>
                <img
                  src="https://res.cloudinary.com/repify/image/upload/v1601862897/empty_state.svg"
                  alt="nothing here"
                  className="NoSpendImg"
                />
              </div>
            )}
          </div>
        </div>

        <div className="ProfileCard">
          <div className="CardItems">
            <h3 className="UserName">{aboutUser.name}</h3>
            <h1 className="RepifyId">
              {aboutUser.reference ? aboutUser.reference : aboutUser.email}
            </h1>
            <p className="AccountType">Personal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
