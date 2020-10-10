import React, { useState, useEffect } from "react";
import "./Benefactors.css";
import RenderBenefactorsTable from "./BenefactorsTable";
import getTokenDetails from "../../lib/jwt";
import Axios from "../../lib/client";

const Benefactors = () => {

   // Beneficiaries State management 
   const [beneficiaries, setBenefactors] = useState(null);
   const [userHasBenefactors, setuserHasBenefactors] = useState(false);

  // connect to back end and fetch all beneciries data for a user
  const fetchAllbenefactors = async () => {
    const token = localStorage.getItem("UserToken");
    const userInfo = await getTokenDetails(token);
    const userId = userInfo.payload[0].id;

    await Axios.get(`/beneficiary/benefactor?access_token=${token}&user_id=${userId}`)
      .then(async (res) => {
        const benefactors = await res.data;
        if (benefactors.data.length !== 0) {
          setBenefactors(benefactors);
          setuserHasBenefactors(true);
        }
      })
      .catch((err) => {
        window.alert(err + " No internet connection");
      });
  };

  useEffect(() => {
    fetchAllbenefactors();
  }, []);
  
  return (
    <div className="Benefactors">
      <div className="grid-container">
        <div className="pageTitle col-1">
          <div className="space-div"><h3>Benefactors</h3></div>
          <div className="space-div">Personal</div>
        </div>
        <div className="addBenefactors-btn col-2">
          <button>Send Request</button>
        </div>
        <div className="benefactorsDetails">
        <div className="totalBenefactors col-3">
          <div className="space-div"> Total Benefactors</div>
          <div className="space-div">{userHasBenefactors ? "" : 0}</div>
        </div>
        <div className="pendingRequest col-4">
          <div className="space-div"> Pending Request </div>
          <div className="space-div">{userHasBenefactors ? "" : 0}</div>
        </div>
        <div className="earnings col-5">
          <div className="space-div"> Expected Earning </div>
          <div className="space-div">&#x20A6; {userHasBenefactors ? "" : 0}</div>
        </div>
        </div>
        <RenderBenefactorsTable benefactors={beneficiaries} />
      </div>
    </div>
  );
};

export default Benefactors;
