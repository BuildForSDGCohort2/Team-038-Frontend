import React, {useState} from "react";
import BeneficiariesModal from "../../Components/BeneficiariesModal/BeneficiariesModal";
import "./Beneficiaries.css";
import RenderBeneficiariesTable from "./BeneficiriesTable";
import data from "./data";

const Beneficiaries = () => {

  // State management for add beneficiaries
  const [addBeneficiaries, setAddBeneficiaries] = useState(false);

  const addBeneficiariesHandler = () => {
    setAddBeneficiaries(!addBeneficiaries);
  };

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
          <div className="space-div">17</div>
        </div>
        <div className="awaitingRequest col-4">
          <div className="space-div"> Awaiting Request </div>
          <div className="space-div">3</div>
        </div>
        <div className="scheduledExpenses col-5">
          <div className="space-div"> Scheduled Expenses </div>
          <div className="space-div">&#x20A6; 42,000</div>
        </div>
        </div>
        <RenderBeneficiariesTable beneficiaries={fetchAllbeneficiaries()} />
      </div>
    </div>
  );
};

export default Beneficiaries;
