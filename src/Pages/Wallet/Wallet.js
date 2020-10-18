import React, { useState, useEffect } from "react";
import "./Wallet.css";
import { transactions } from "../Profile/data.js";
import Button from "../../Components/Button/Button";
import { usePaystackPayment } from "react-paystack";
import Modal from "../../Components/Modals/Modal";
import getTokenDetails from "../../lib/jwt";
import Axios from "../../lib/client";
import appConfig from "../../lib/config"
const token = localStorage.getItem("UserToken");

const Wallet = (props) => {
  // Declaring States

  const [hideBalance, setHideBalance] = useState(true);
  const [fundWallet, setFundWallet] = useState(false);
  const [amount, setAmount] = useState();

  const [getWallet, setGetWallet] = useState("");
  const [aboutUser, setAboutUser] = useState("");
  const [userAccount, setUserAccount] = useState("");
  const showTrans = false;

  const getUserData = async () => {
    const token = localStorage.getItem("UserToken");
    const userInfo = await getTokenDetails(token);
    const userId = userInfo.payload[0].id;

    await Axios.get(`/user?access_token=${token}&user_id=${userId}`)
      .then(async (res) => {
        const main = await res.data.data[0];
        const wallet = await res.data.data[0].Wallet;

        if(main.user_type_id) {
          setUserAccount(appConfig.userType.personal);
        }
        else {
          setUserAccount(appConfig.userType.company);
        }
        if(wallet) {
          setGetWallet(wallet);
        }
        setAboutUser(main);
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


  let amountData = [];
  if(hideBalance) {
    amountData.push(
      <h3 className="WalletBalance">
          &#8358; {" X X X"}
      </h3>
    )
  }
  else {
    amountData.push(
      <h3 className="WalletBalance">
          &#8358; {getWallet.current_balance ? getWallet.current_balance : "0.00"}
      </h3>
    )
  }

  //  ComponentDIdMount Alternative;
  useEffect(() => {
    getUserData();
  }, []);

  const reference = new Date().getTime();
  const apiKey = process.env.REACT_APP_ID;

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
    text: "Fund"
  };

  const onSuccess = (data) => {
    const userId = aboutUser.id
    const payload = {
      reference: data.reference,
      amount: amount
    }
    //Update API on success
    Axios.post(`/transactions/credit_wallet?access_token=${token}&user_id=${userId}`, payload)
      .then((res) => {
        //implement toast on success
      })
      .catch((err) => err)
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
  }
  

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
              onChange={(e) => setAmountHandler(e)}
              className="FundAmount"
              value={amount}
            />
          </form>
          <button
            onClick={() => {
              initializePayment(onSuccess, onClose);
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
            {amountData[0]}
            <div className="WalletTextGrouped">
              <p className="WalletLink BlueColor" onClick={fundWalletHandler}>
                Fund Account
              </p>
              <p className="HideIt" onClick={hideBalanceHandler}>
                {hideBalance ? "Show Balance" : "Hide Balance"}
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
            <p className="AccountType">{userAccount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
