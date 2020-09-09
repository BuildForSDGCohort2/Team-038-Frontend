import React from "react";
import "./Dashboard.css";
import Logo from "../Header/Repify.png";
import Bell from "./Notification.svg";
import User from "./Profile.png";
import { NavLink } from "react-router-dom";
const TopNav = () => {
  return (
    <div className="TopNav">
      <nav className="DashboardNav">
        <div className="BrandLogo">
          <img src={Logo} className="Brand" alt="Repify" />
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
  return (
    <aside className="SideNav">
      <div className="SlideNav">
        <NavLink to="/dashboard/wallet" activeClassName="Active" className="NavLink">
          Wallet
        </NavLink>
        <NavLink to="/dashboard/wallet" activeClassName="Active" className="NavLink">
          Profile
        </NavLink>
        <NavLink to="/dashboard/wallet" activeClassName="Active" className="NavLink">
          Transactions
        </NavLink>
        <NavLink to="/dashboard/wallet" activeClassName="Active" className="NavLink">
          Benefactors
        </NavLink>
        <NavLink to="/dashboard/wallet" activeClassName="Active" className="NavLink">
          Beneficiaries
        </NavLink>
        <NavLink to="/dashboard/wallet" activeClassName="Active" className="NavLink">
          Settings
        </NavLink>
        <NavLink to="/dashboard/wallet" activeClassName="Active" className="NavLink">
          Log Out
        </NavLink>
      </div>
    </aside>
  );
};

export { TopNav, SideNav };
