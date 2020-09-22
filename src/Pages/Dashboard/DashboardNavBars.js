import React, { useState } from "react";
import "./DashboardNavBars.css";
import Logo from "./img/Repify.png";
import Bell from "./img/Notification.svg";
import User from "./img/Profile.png";
import { NavLink } from "react-router-dom";
import {
  RiUserLine,
  RiDonutChartLine,
  RiInboxArchiveLine,
  RiSettings2Line,
  RiMenu4Fill,
  RiCloseFill,
} from "react-icons/ri";
import { MdAttachMoney, MdDeviceHub, MdExitToApp } from "react-icons/md";

// let status;
let sliding;

const TopNav = () => {
  const [showSlide, setSlowSIde] = useState(false);
  const makeSlide = () => {
    setSlowSIde(true);
    sliding = showSlide;
  };

  // if (showSlide) {
  //   SlideClass.push('Action');
  //   console.log(SlideClass);
  // }

  return (
    <div className="TopNav">
      <nav className="DashboardNav">
        <div className="BrandLogo">
          <NavLink to="/">
            <img src={Logo} className="Brand" alt="Repify" />
          </NavLink>
        </div>
        <div className="MenuLogo">
          <RiMenu4Fill className="SideIcons" onClick={makeSlide} />
        </div>
        <div className="UserProfile">
          <img src={Bell} alt="Notification" className="Notify NavItem" />
          <img src={User} alt="Profile" className="UserImg NavItem" />
          <p className="UserName NavItem">UserName</p>
        </div>
      </nav>
    </div>
  );
};

const SideNav = () => {
  const [hideSlide, setHideSlide] = useState(true);
  const closeSlide = () => {
    setHideSlide(false);
    sliding = hideSlide;
  };
  return (
    <aside className={sliding ? "SideNav Action" : "SideNav"}>
      <div className="SlideNav">
        <div className="CloseSlide">
          <RiCloseFill className="SideIcons SlideClose" onClick={closeSlide} />
        </div>
        <div className="SlideLogo">
          <NavLink to="/">
            <img src={Logo} className="Brand" alt="Repify" />
          </NavLink>
        </div>
        <ul className="SideItems">
          <li className="SideList">
            <NavLink to="/wallet" activeClassName="Active" className="NavLink">
              <MdAttachMoney className="SideIcons" />
              <span className="LinkText">Wallet</span>
            </NavLink>
          </li>
          <li className="SideList">
            <NavLink to="/profile" activeClassName="Active" className="NavLink">
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
            <NavLink to="/logout" activeClassName="Active" className="NavLink">
              <MdExitToApp className="SideIcons" />
              <span className="LinkText">Log Out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export { TopNav, SideNav };
