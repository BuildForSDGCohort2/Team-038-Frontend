import React from "react";
import "./Settings.css";
import AccountSetting from "./AccountSetting/AccountSetting";
import AccountStatement from "./AccountStatement/AccountStatement";
import ChangePassword from "./ChangePassword/ChangePassword";
import ChangePin from "./ChangePin/ChangePin";
import EditProfile from "./EditProfile/EditProfile";
import HelpSupport from "./HelpSupport/HelpSupport";


class Settings extends React.Component {
  constructor(){
    super();
    this.state = {
      option: 0,
      active:0
    }
  };

  selectOption(id) {
    this.setState({option: id});
    this.setState({active: id});
  }

  render(){
    return(
      <div className="main-container">
        <h1 className="title-header">Settings</h1>
        <div className="optContainer">
          <div className="options">
            <h2>Profile Settings</h2>
            <ul className="settingList">
              <li onClick={(() => this.selectOption(0))} 
                className={this.state.active === 0 ? "activeOpt" : null}>Edit Profile</li>
              <li onClick={() => this.selectOption(1)}
                className={this.state.active === 1 ? "activeOpt" : null}>Change Password</li>
              <li onClick={() => this.selectOption(2)}
                className={this.state.active === 2 ? "activeOpt" : null}>Change Transaction Pin</li>
              <li onClick={() => this.selectOption(3)}
                className={this.state.active === 3 ? "activeOpt" : null}>Account Settings</li>
              <li onClick={() => this.selectOption(4)}
                className={this.state.active === 4 ? "activeOpt" : null}>Account Statement</li>
              <li onClick={() => this.selectOption(5)}
                className={this.state.active === 5 ? "activeOpt" : null}>Help & Support</li>
            </ul>
          </div>
          <div className="displayed">
            { 
              {
                0: <EditProfile/>,
                1: <ChangePassword/>,
                2: <ChangePin/>,
                3: <AccountSetting/>,
                4: <AccountStatement/>,
                5: <HelpSupport/>
              }[this.state.option]
            }
          </div>
        </div>
      </div>
    );
  }
};

export default Settings;