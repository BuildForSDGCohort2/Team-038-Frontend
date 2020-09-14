import React from "react";
import "./ChangePassword.css";


const ChangePassword = () => {
  
  return(
    <div>
      <h4>Change Password</h4>
      <p>To Change Password, type in current password</p>
      <form className="c-Form">
        <input type="password" name="currentPassword" placeholder="Enter Current Password" required/>
        <input type="password" name="newPassword" placeholder="Enter New Password" required/>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" required/>
      </form>
      <button id="btnSend">Save Changes</button>
    </div>
  );
}

export default ChangePassword;