import React from "react";
import "./Beneficiaries.css";
import RenderBeneficiariesTable from "./BeneficiriesTable";
import data from "./data";

const Beneficiaries = () => {

  // connect to back end and fetch all beneciries data for a user
  const fetchAllbeneficiaries = () => {
    if (data.length === 0) {
      return null;
    } else {
      return data;
    }
  };
  
  return (
    <div className="Beneficiaries">
      <div className="grid-Container">
        <div className="pageTitle col-1">
          <h3>Beneficiaries</h3>
          <div>Personal</div>
        </div>
        <div className="addBeneficiries-btn col-2">
          <button>Add Beneficiaries</button>
        </div>
        <div className="beneficiariesDetails">
        <div className="totalBeneficiaries col-3">
          <div> Total Beneficiaries</div>
          <div>17</div>
        </div>
        <div className="awaitingRequest col-4">
          <div> Awaiting Request </div>
          <div>3</div>
        </div>
        <div className="scheduledExpenses col-5">
          <div> Scheduled Expenses </div>
          <div>&#x20A6; 42,000</div>
        </div>
        </div>
        <RenderBeneficiariesTable beneficiaries={fetchAllbeneficiaries()} />
      </div>
    </div>
  );
};

export default Beneficiaries;
