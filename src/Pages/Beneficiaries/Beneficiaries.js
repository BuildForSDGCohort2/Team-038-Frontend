import React, { useState, useEffect } from "react";
import BeneficiariesModal from "../../Components/BeneficiariesModal/BeneficiariesModal";
import "./Beneficiaries.css";
import RenderBeneficiariesTable from "./BeneficiriesTable";
import getTokenDetails from "../../lib/jwt";
import Axios from "../../lib/client";

const Beneficiaries = () => {

  // State management for add beneficiaries
  const [addBeneficiaries, setAddBeneficiaries] = useState(false);

  // Beneficiaries State management 
  const [beneficiaries, setBeneficiaries] = useState(null);
  const [totalBeneficiaries, setTotalBeneficiaries] = useState(0);
  const [awaitingRequest, setAwaitingRequest] = useState(0);
  const [scheduledExpenses, setScheduledExpenses] = useState(0);


  // handler for adding new beneficiary
  const addBeneficiariesHandler = () => {
    setAddBeneficiaries(!addBeneficiaries);
  };

  const getScheduledExpenses = (beneficiaries) => {
    let scheduledExpenses = 0;
    beneficiaries.forEach((beneficiarie) => {

      // adds up all amounts if the status is active (NOTE*** this is in anticipation because Im not sure whats coming from the databese**/)
      if (beneficiarie.details.status === "active"){
        scheduledExpenses += beneficiarie.details.amount;
      }
    });
    setScheduledExpenses(scheduledExpenses);
  };
  
  //connect to back end and fetch all beneciries data for a user
  const getBeneficiaries = async () => {
    const token = localStorage.getItem("UserToken");
    const userInfo = await getTokenDetails(token);
    const userId = userInfo.payload[0].id;

    await Axios.get(`/beneficiary?access_token=${token}&user_id=${userId}`)
      .then(async (res) => {
        const beneficiaries = await res.data;
        if (beneficiaries.data.length !== 0) {
          setBeneficiaries(beneficiaries.data);
          setTotalBeneficiaries(beneficiaries.data.length);
          getScheduledExpenses((beneficiaries.data));
        }
      })
      .catch((err) => {
        window.alert("Hoops!!!.. Some error occured please try again, make sure you're connected to internet" );
      });
  };

  /*useEffect(() => {
    getBeneficiaries();
  }, []);*/

  return (
    <div className="Beneficiaries">

      {/* Add beneficiary modal  */}

      <BeneficiariesModal clicked={addBeneficiariesHandler} isTrue={addBeneficiaries} />
      <div className="grid-Container">
        <div className="pageTitle col-1">
          <div className="space-div"><h3>Beneficiaries</h3></div>
          <div className="space-div">Personal</div>
        </div>
        <div className="addBeneficiries-btn col-2">
          <button onClick={addBeneficiariesHandler}>Add Beneficiaries</button>
        </div>
        <div className="beneficiariesDetails">
          <div className="totalBeneficiaries col-3">
            <div className="space-div"> Total Beneficiaries</div>
            <div className="space-div">{totalBeneficiaries}</div>
          </div>
          <div className="awaitingRequest col-4">
            <div className="space-div"> Await Request</div>
            <div className="space-div">{awaitingRequest}</div>
          </div>
          <div className="scheduledExpenses col-5">
            <div className="space-div"> Scheduled Expenses </div>
            <div className="space-div">&#x20A6; {scheduledExpenses}</div>
          </div>
        </div>
        <RenderBeneficiariesTable beneficiaries={beneficiaries} addBeneficiariesHandler={addBeneficiariesHandler}/>
      </div>
    </div>
  );
};

export default Beneficiaries;
