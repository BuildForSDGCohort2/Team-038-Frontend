import React from "react";
import "./ChangePin.css";


const ChangePin = () => {
  
  return(
    <div>
      <h4>Change Transaction Pin</h4>
      <p>To Change Transaction pin, type in your current pin</p>
      <form className="setForm">
        <input type="text" name="currentpin" placeholder="Current Pin" required/>
        <input type="text" name="newpin" placeholder="New Pin" required/>
      </form>
      <button className="setBtn">Save Changes</button>
    </div>
  );
};

export default ChangePin;