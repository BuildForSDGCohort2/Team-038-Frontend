import React from "react";
import "./Benefactors.css";
import RenderBenefactorsTable from "./BenefactorsTable";
import data from "./data";

const Benefactors = () => {

  // connect to back end and fetch all beneciries data for a user
  const fetchAllbenefactors = () => {
    if (data.length === 0) {
      return null;
    } else {
      return data;
    }
  };
  
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
          <div className="space-div">17</div>
        </div>
        <div className="pendingRequest col-4">
          <div className="space-div"> Pending Request </div>
          <div className="space-div">3</div>
        </div>
        <div className="earnings col-5">
          <div className="space-div"> Expected Earning </div>
          <div className="space-div">&#x20A6; 42,000</div>
        </div>
        </div>
        <RenderBenefactorsTable benefactors={fetchAllbenefactors()} />
      </div>
    </div>
  );
};

export default Benefactors;
