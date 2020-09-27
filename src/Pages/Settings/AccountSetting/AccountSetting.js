import React from "react";
import "./AccountSetting.css";


const AccountSetting = () => {

  return(
      <div>
        <h4>Account Settings</h4>
        <p className="text">You can only change your account number and account type</p>
        <form className="setForm" id="form">
          <input type="text" name="accountName" placeholder="Account Name" required/>
          <input type="text" name="accountNumber" placeholder="Account Number" required/>
          <input type="text" name="bank" placeholder="Bank" required/>
          <input type="text" name="accountType" placeholder="Account Type" required/>
        </form>
        <button className="setBtn">Save Changes</button>
      </div>
  );
};

export default AccountSetting;