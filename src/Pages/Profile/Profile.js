import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { profileData, earnings } from "./data.js";
import { GoLocation, GoMail } from "react-icons/go";
import { FiPhone, FiPlus } from "react-icons/fi";

const Normal = () => {
  const data = { ...profileData[0] };
  return (
    <div className="Profile">
      <div className="ProfileHero">
        <div className="HeroTexts">
          <h2 className="HeroHeading">Profile</h2>
        </div>
      </div>
      <div className="ProfileBody">
        <div className="ProfileSection">
          <div className="ProfileDetails">
            <div className="ProfileImg">
              <img src={data.url} alt={data.firstName} />
            </div>
            <h2 className="ProfileName">
              {data.firstName} {data.SecondName}
            </h2>
          </div>
          <hr className="separator" />
          <div className="ProfileContact">
            <p>
              <GoLocation /> <span className="innerText">{data.location}</span>
            </p>
            <p>
              <GoMail /> <span className="innerText">{data.email}</span>
            </p>
            <p>
              <FiPhone /> <span className="innerText">{data.phone}</span>
            </p>
          </div>
          <hr className="separator" />
          <Link className="Link" to="#">
            <p className="Edit">Edit Profile</p>
          </Link>
        </div>
        <div className="ProfileGrid">
          <div className="UserIDCard">
            <div className="Tags">
              <h5>User Id</h5>
              <p className="CopyText">Copy</p>
            </div>
            <h1 className="RepifyId">{data.userId}</h1>
            <p className="UserType">{data.accountType}</p>
          </div>
          <div className="gridCards">
            <div className="EarningsCard">
              <div className="EarnTitle">
                <h3 className="EarnType BlueColor">{earnings[0].type}</h3>
                <h3 className="EarnType">
                  <FiPlus />
                </h3>
              </div>
              <p className="EarnTotal">{earnings[0].total}</p>
              <div className="EarningIncome">
                <h6 className="TotalText">Total Income</h6>
                <h6 className="TotalAmount BlueColor">
                  &#8358; {earnings[0].balance}
                </h6>
              </div>
              <Link className="SeeLink" to="#">
                <p className="See">See More</p>
              </Link>
            </div>
            <div className="EarningsCard">
              <div className="EarnTitle">
                <h3 className="EarnType RedColor">{earnings[1].type}</h3>
                <h3 className="EarnType">
                  <FiPlus />
                </h3>
              </div>
              <p className="EarnTotal">{earnings[1].total}</p>
              <div className="EarningIncome">
                <h6 className="TotalText">Total Expense</h6>
                <h6 className="TotalAmount RedColor">
                  &#8358; {earnings[1].balance}
                </h6>
              </div>
              <Link className="SeeLink" to="#">
                <p className="See">See More</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Organization = () => {
  return (
    <div className="Organisation">
      <h2>Company Profile Page</h2>
    </div>
  );
};
export { Normal, Organization as Organisation };
