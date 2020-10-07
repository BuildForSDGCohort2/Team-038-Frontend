import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { profileData, earnings } from "./data.js";
import { GoLocation, GoMail } from "react-icons/go";
import { FiPhone, FiPlus } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import BeneficiariesModal from "../../Components/BeneficiariesModal/BeneficiariesModal";
import BenefactorsModal from "../../Components/BenefactorsModal/BenefactorsModal";
import getTokenDetails from "../../lib/jwt";
import Axios from "../../lib/client";

const Normal = () => {
  const data = { ...profileData[0] };

  // State Managements

  const [copyId, setCopyId] = useState("Copy");
  const [addBenefactors, setAddBenefactors] = useState(false);
  const [addBeneficiaries, setAddBeneficiaries] = useState(false);
  const [getData, setGetData] = useState("");

  const getUserId = async () => {
    const token = localStorage.getItem("UserToken");
    const userInfo = await getTokenDetails(token);
    const userId = userInfo.payload[0].id;
    await Axios.get(`/user?access_token=${token}&user_id=${userId}`)
      .then(async (res) => {
        const api = await res.data.data[0];
        setGetData(api);
        console.log(api);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    getUserId();
    // eslint-disable-next-line
  }, []);

  //  State Handlers

  const copyIdHandler = (e) => {
    setCopyId("Copied!");
  };

  const addBenefactorsHandler = () => {
    setAddBenefactors(!addBenefactors);
  };

  const addBeneficiariesHandler = () => {
    setAddBeneficiaries(!addBeneficiaries);
  };
  return (
    <div className="Profile">
      {/* Add Benefactors and Beneficiaries Modal */}
      <BeneficiariesModal
        clicked={addBeneficiariesHandler}
        isTrue={addBeneficiaries}
      />
      <BenefactorsModal
        clicked={addBenefactorsHandler}
        isTrue={addBenefactors}
      />

      <div className="ProfileHero">
        <div className="HeroTexts">
          <h1 className="HeroHeading">Profile</h1>
        </div>
      </div>
      <div className="ProfileBody">
        <div className="ProfileSection">
          <div className="ProfileDetails">
            <div className="ProfileImg">
              <img src={data.url} alt={getData.name} />
            </div>
            <h2 className="ProfileName">
              {getData.name}
            </h2>
          </div>
          <hr className="separator" />
          <div className="ProfileContact">
            <p>
              <GoLocation /> <span className="innerText">{data.location}</span>
            </p>
            <p>
              <GoMail /> <span className="innerText">{getData.email}</span>
            </p>
            <p>
              <FiPhone /> <span className="innerText">{getData.phone_number}</span>
            </p>
          </div>
          <hr className="separator" />
          <Link className="Link" to="#">
            <p className="Edit">Edit Profile</p>
          </Link>
        </div>
        <div className="ProfileGrid">
          <div className="UserIdCard" onClick={copyIdHandler}>
            <div className="Tags">
              <h5>User Id</h5>
              <CopyToClipboard text={getData.reference ? getData.reference : getData.email}>
                <p className="CopyText">{copyId}</p>
              </CopyToClipboard>
            </div>
            <h1 className="RepifyId" defaultValue={getData.reference ? getData.reference : getData.email}>
              {getData.reference ? getData.reference : getData.email}
            </h1>
            <p className="UserType">{data.accountType}</p>
          </div>
          <div className="gridCards">
            <div className="EarningsCard">
              <div className="EarnTitle">
                <h3 className="EarnType BlueColor">Benefactors</h3>
                <h3 className="EarnTypeIcon" onClick={addBenefactorsHandler}>
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
                <h3 className="EarnType RedColor">Beneficiaries</h3>
                <h3 className="EarnTypeIcon" onClick={addBeneficiariesHandler}>
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
