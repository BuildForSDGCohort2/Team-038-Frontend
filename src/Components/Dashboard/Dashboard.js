import React from "react";
import "./Dashboard.css";
import Logo from "../Header/Repify.png";
import Bell from "./Notification.svg";
import User from "./Profile.png";
import { NavLink } from "react-router-dom";
import {
  RiUserLine,
  RiDonutChartLine,
  RiInboxArchiveLine,
  RiSettings2Line,
} from "react-icons/ri";
import { MdAttachMoney, MdDeviceHub, MdExitToApp } from "react-icons/md";

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
        <ul className="SideItems">
          <li className="SideList">
            <NavLink
              to="/dashboard/wallet"
              activeClassName="Active"
              className="NavLink"
            >
              <MdAttachMoney className="SideIcons" /> Wallet
            </NavLink>
          </li>
          <li className="SideList">
            <NavLink
              to="/dashboard/wallet"
              activeClassName="Active"
              className="NavLink"
            >
              <RiUserLine className="SideIcons" />
              Profile
            </NavLink>
          </li>{" "}
          <li className="SideList">
            <NavLink
              to="/dashboard/wallet"
              activeClassName="Active"
              className="NavLink"
            >
              <RiDonutChartLine className="SideIcons" />
              Transactions
            </NavLink>
          </li>
          <li className="SideList">
            <NavLink
              to="/dashboard/wallet"
              activeClassName="Active"
              className="NavLink"
            >
              <RiInboxArchiveLine className="SideIcons" />
              Benefactors
            </NavLink>
          </li>
          <li className="SideList">
            <NavLink
              to="/dashboard/wallet"
              activeClassName="Active"
              className="NavLink"
            >
              <MdDeviceHub className="SideIcons" />
              Beneficiaries
            </NavLink>
          </li>
          <li className="SideList">
            <NavLink
              to="/dashboard/wallet"
              activeClassName="Active"
              className="NavLink"
            >
              <RiSettings2Line className="SideIcons" />
              Settings
            </NavLink>
          </li>
          <li className="SideList">
            <NavLink
              to="/dashboard/wallet"
              activeClassName="Active"
              className="NavLink"
            >
              <MdExitToApp className="SideIcons" />
              Log Out
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export { TopNav, SideNav };
