import React from "react";
import profileImage from "./image.jpg";
import "./EditProfile.css";


const EditProfile = () => {
  
  return(
    <div>
      <div id="editwrap">
              <div>
                <h4>Edit Profile</h4>
                <p>Update Your Profile</p>
                <form>
                  <input  className="form-input" type="text" name="firstName" placeholder="First Name" required/>
                  <input  className="form-input" type="text" name="lastName" placeholder="Last Name" required/>
                  <input  className="form-input" type="email" name="mail" placeholder="Email Address" required/>
                  <input  className="form-input" type="text" name="phone" placeholder="Phone Number" required/>
                </form>
              </div>
              <div className="img-container">
                <img id="profileImg" src={profileImage} alt="profile"/>
                <button id="saveChangeBtn">Save Changes</button>
              </div>
            </div>
    </div>
  )
}
export default EditProfile;