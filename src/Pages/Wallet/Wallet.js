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
        <div className="WalletCard WalletAccount">
          <div className="CardItems">
            <h5 className="CardHeading">Repify Balance</h5>
            <h3 className="WalletBalance"># 23, 000</h3>
            <p className="WalletLink">
              <Link className="BlueColor CardLink" to="/found">Fund Account</Link>
            </p>
          </div>
        </div>
        <div className="WalletCard WalletTrans">
          <div className="CardItems">
            <h5 className="CardHeading">Last Transactions</h5>
            <div className="LastTransact Received">
              <div className="CardHeading Bold">Received</div>
              <p className="Transact">
                <span className="Money BlueColor">#10, 000</span> from Mr Gideon
              </p>
            </div>
            <div className="LastTransact Sent">
              <div className="CardHeading Bold">Sent</div>
              <p className="Transact">
                <span className="Money RedColor">#10, 000</span> to Mr Gideon
              </p>
            </div>
          </div>
        </div>
        <div className="ProfileCard">
          <div className="CardItems">
            <h3 className="UserName">Daniel Bemsen</h3>
            <h1 className="RepifyId">REP4285883022543</h1>
            <p className="AccountType">Person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
