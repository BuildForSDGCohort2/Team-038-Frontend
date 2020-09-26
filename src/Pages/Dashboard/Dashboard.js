import React, { useState } from "react";
import "./Dashboard.css";
import "./DashboardNavBars.css";
import { Route, HashRouter, NavLink } from "react-router-dom";
import Wallet from "../Wallet/Wallet";
import { Normal as Profile } from "../Profile/Profile";
import Transaction from "../Transactions/Transactions";
import Benefactors from "../Benefactors/Benefactors";
import Beneficiaries from "../Beneficiaries/Beneficiaries";
import Settings from "../Settings/Settings";
import Logo from "./img/Repify.png";
import Bell from "./img/Notification.svg";
import User from "./img/Profile.png";
import {
  RiUserLine,
  RiDonutChartLine,
  RiInboxArchiveLine,
  RiSettings2Line,
  RiMenu4Fill,
  RiCloseFill,
} from "react-icons/ri";
import { MdAttachMoney, MdDeviceHub, MdExitToApp } from "react-icons/md";
import { profileData as data } from "../Profile/data.js";

const Normal = () => {

  const [sliding, setSliding] = useState(false);

  const showLeftBar = () => setSliding(!sliding);

  return (
    <div className="User">
      {/* <TopNav /> */}

      <div className="TopNav">
        <nav className="DashboardNav">
          <div className="MenuLogo">
            <RiMenu4Fill className="SideIcons" onClick={showLeftBar} />
          </div>
          <div className="BrandLogo">
            <NavLink to="/">
              <img src={Logo} className="Brand" alt="Repify" />
            </NavLink>
          </div>
          <div className="UserProfile">
            <img src={Bell} alt="Notification" className="Notify NavItem" />
            <img src={User} alt="Profile" className="UserImg NavItem" />
            <p className="UserName NavItem">{data[0].firstName} {data[0].SecondName}</p>
          </div>
        </nav>
      </div>

      {/* Main Body */}

      <div className="Dashboard">
        <HashRouter>
          {/* <SideNav /> */}

          <aside className={sliding ? "SideNav Action" : "SideNav"}>
            <div className="SlideNav">
              <div className="CloseSlide">
                <RiCloseFill className="SideIcons SlideClose" onClick={showLeftBar} />
              </div>
              <div className="SlideLogo">
                <NavLink to="/">
                  <img src={Logo} className="Brand" alt="Repify" onClick={showLeftBar} />
                </NavLink>
              </div>
              <ul className="SideItems" onClick={showLeftBar}>
                <li className="SideList">
                  <NavLink
                    to="/wallet"
                    activeClassName="Active"
                    className="NavLink"
                  >
                    <MdAttachMoney className="SideIcons" />
                    <span className="LinkText">Wallet</span>
                  </NavLink>
                </li>
                <li className="SideList">
                  <NavLink
                    to="/profile"
                    activeClassName="Active"
                    className="NavLink"
                  >
                    <RiUserLine className="SideIcons" />
                    <span className="LinkText">Profile</span>
                  </NavLink>
                </li>
                <li className="SideList">
                  <NavLink
                    to="/transaction"
                    activeClassName="Active"
                    className="NavLink"
                  >
                    <RiDonutChartLine className="SideIcons" />
                    <span className="LinkText">Transactions</span>
                  </NavLink>
                </li>
                <li className="SideList">
                  <NavLink
                    to="/benefactor"
                    activeClassName="Active"
                    className="NavLink"
                  >
                    <RiInboxArchiveLine className="SideIcons" />
                    <span className="LinkText">Benefactors</span>
                  </NavLink>
                </li>
                <li className="SideList">
                  <NavLink
                    to="/beneficiaries"
                    activeClassName="Active"
                    className="NavLink"
                  >
                    <MdDeviceHub className="SideIcons" />
                    <span className="LinkText">Beneficiaries</span>
                  </NavLink>
                </li>
                <li className="SideList">
                  <NavLink
                    to="/settings"
                    activeClassName="Active"
                    className="NavLink"
                  >
                    <RiSettings2Line className="SideIcons" />
                    <span className="LinkText">Settings</span>
                  </NavLink>
                </li>
                <li className="SideList">
                  <NavLink
                    to="/logout"
                    activeClassName="Active"
                    className="NavLink"
                  >
                    <MdExitToApp className="SideIcons" />
                    <span className="LinkText">Log Out</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </aside>

          <div className="MainBody">
            <Route path="/wallet" exact component={Wallet} />
            <Route path="/profile" component={Profile} />
            <Route path="/transaction" component={Transaction} />
            <Route path="/benefactor" component={Benefactors} />
            <Route path="/beneficiaries" component={Beneficiaries} />
            <Route path="/settings" component={Settings} />
          </div>
        </HashRouter>
      </div>
    </div>
  );
};

const Organisation = () => {
  return (
    <div className="Organisation">
      <h2>Company Profile Page</h2>
    </div>
  );
};
export { Normal, Organisation };
