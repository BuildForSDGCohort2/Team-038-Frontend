import React, { useState, useEffect } from "react";
import "./Wallet.css";
import Button from "../../Components/Button/Button";
import { profileData as userData, transactions } from "../Profile/data.js";

const Wallet = (props) => {
  const [details, getDetails] = useState({});
  const [hideBalance, setHideBalance] = useState(false);
  const [fundWallet, setFundWallet] = useState(false);

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

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="Wallet">
      <div className="WalletHero">
        <div className="HeroTexts">
          <h1 className="HeroHeading">Wallet</h1>
          <p className="SmallText">{`Hello, ${details.firstName} Welcome Back`}</p>
        </div>
        <div className="HeroBtn">
            <Button Title="Fund Wallet" onClick={fundWalletHandler} />
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
