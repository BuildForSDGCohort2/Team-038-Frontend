import React from "react";
import "./Wallet.css";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const Wallet = (props) => {
  return (
    <div className="Wallet">
      <div className="WalletHero">
        <div className="HeroTexts">
          <h1 className="HeroHeading">Wallet</h1>
          <p className="SmallText">Hello Daniel, Welcome Back</p>
        </div>
        <div className="HeroBtn">
          <Button Title="Fund Wallet" />
        </div>
      </div>
      <div className="WalletBody">
        <div className="WalletCard">
          <p className="CardHeading">Repify Balance</p>
          <h3 className="WalletBalance"># 23, 000</h3>
          <Link className="BlueColor CardLink">Fund Account</Link>
        </div>
        <div className="WalletCard">
          <p className="CardHeading">Last Transactions</p>
          <div className="LastTransact Received">
            <div className="CardHeading Bold">Received</div>
            <p className="Transact">
              <span className="Money BlueColor">#10, 000</span> from Mr Gideon
            </p>
          </div>
          <div className="LastTransact Sent">
            <div className="CardHeading Bold">Sent</div>
            <p className="Transact">
              <span className="Money RedColor">#10, 000</span> from Mr Gideon
            </p>
          </div>
        </div>
      </div>
      <div className="WalletCard">
        <h4 className="UserName">Daniel Bemsen</h4>
        <h2 className="RepifyId">REP4285883022543</h2>
        <p className="AccountType">Person</p>
      </div>
    </div>
  );
};

export default Wallet;
