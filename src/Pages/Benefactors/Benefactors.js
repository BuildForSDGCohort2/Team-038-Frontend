import React, { useState, useEffect } from "react";
import "./Benefactors.css";
import RenderBenefactorsTable from "./BenefactorsTable";
import getTokenDetails from "../../lib/jwt";
import Axios from "../../lib/client";

const Benefactors = () => {

  // Benefactors State management 
  const [benefactors, setBenefactors] = useState(null);
  const [totalBenefactors, setTotalBenefactors] = useState(0);
  const [pendingRequest, setPendingRequest] = useState(0);
  const [expectedEarnings, setExpectedEarnings] = useState(0);

  // Get expected earnings if the transaction is active
  const getExpectedEarnings = (benefactors) => {
    let expectedEarnings = 0;
    benefactors.forEach((benefactor) => {
      // adds up all amounts if the status is active
      if (benefactor.details.status === "active") {
        expectedEarnings += benefactor.details.amount;
      }
    });
    setExpectedEarnings(expectedEarnings);
  };

  // connect to back end and fetch all benefactors data for a user
  const fetchAllbenefactors = async () => {
    const token = await localStorage.getItem("UserToken");
    const userInfo = await getTokenDetails(token);
    const userId = userInfo.payload[0].id;

    await Axios.get(`/beneficiary/benefactor?access_token=${token}&user_id=${userId}`)
      .then(async (res) => {
        const benefactors = await res.data;
        if (benefactors.data.length !== 0) {
          setBenefactors(benefactors.data);
          setTotalBenefactors(benefactors.data.length);
          getExpectedEarnings((benefactors.data));
        }
      })
      .catch((err) => {
        window.alert("Hoops!!!.. Some error occured please try again, make sure you're connected to internet" );
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
            <div className="space-div">{totalBenefactors}</div>
          </div>
          <div className="pendingRequest col-4">
            <div className="space-div"> Pending Request </div>
            <div className="space-div">{pendingRequest}</div>
          </div>
          <div className="earnings col-5">
            <div className="space-div"> Expected Earning </div>
            <div className="space-div">&#x20A6; {expectedEarnings}</div>
          </div>
        </div>
        <RenderBenefactorsTable benefactors={benefactors} />
      </div>
    </div>
  );
};

export default Benefactors;
