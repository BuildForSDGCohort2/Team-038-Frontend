import React from "react";
import "./AccountStatement.css";

const AccountStatement = () => {
  
  return(
    <div>
      <h4>Account Settings</h4>
        <p>You can only change your account number and account type</p>
        <form className="setForm">
          <div>
            <h5>Filter</h5>
            <div className="filter-option">
              <div>
                <label htmlFor="from">From:</label><br/>
                <input type="date" name="from" required/>
              </div>
              <div className="to">
                <label htmlFor="to">To: </label><br/>
                <input type="date" name="to" required/>
              </div>
            </div>
          </div>
          <input id="stmtEmail" type="email" name="email" placeholder="Email" required/>
        </form>
        <button className="setBtn">Save Changes</button>
    </div>
  );
}

export default AccountStatement;