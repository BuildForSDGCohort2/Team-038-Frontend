import React from "react";
import images from "../../images/images"

/** 
 * Renders an empty state if the current user has no beneficiaries to display
 * This component is returned when the beneficiaries object is empty
 */
const NoBeneficiariesFound = (props) => {
    return (
        <tr>
            <td colSpan="4">
                <div className="flexWrapper">
                    <div className="emptyInfo">
                        <h6>You have no Beneficiaries</h6>
                        <div></div>
                        <button onClick={props.addBeneficiariesHandler}>Add them</button>
                    </div>
                    <div className="emptyImg">
                    <img src={images.empty_state} alt="beneficiariesTableEmpty"></img>
                    </div>
                </div>
            </td>
        </tr>
    );
};

/** 
 * Renders table rows 
 * This component  recieves beneficiaries object as "props" and creates a table row for each element
 * creates a table row for each beneficiaries
 */
const RenderTableRows = (props) => {
    const beneficiary = props.beneficiary;
    let statusIndicator = () => {
        //  (NOTE*** this is in anticipation because Im not sure whats coming from the databese**/)
        switch (beneficiary.status) {
            case "inactive":
                return (<div className="indicator" style={{ background: "yellow" }}></div>);
            case "failed":
                return (<div className="indicator" style={{ background: "red" }}></div>);
            case "active":
                return (<div className="indicator" style={{ background: "green" }}></div>);
            default:
                return (<div className="indicator" style={{ background: "green" }}></div>);
        }
    };
    return (
        <tr className="beneficiariesTableRows">
            <td>{beneficiary.name}</td>
            <td>{beneficiary.userID}</td>
            <td>{beneficiary.amount}</td>
            <td>{beneficiary.date}</td>
            <td>{(statusIndicator())}</td>
        </tr>
    );
};

const RenderBeneficiariesTable = (props) => {
    const rows = [];
    var tableRows = () => {
        //Here Im only returing the empty state componenet until Im sure of the data coming from the database (Note**to be removed)
        return <NoBeneficiariesFound addBeneficiariesHandler ={props.addBeneficiariesHandler} />; 
       
       /**  if (!props.beneficiaries) {
            return <NoBeneficiariesFound addBeneficiariesHandler ={props.addBeneficiariesHandler}/>;

        } else {
            props.beneficiaries.forEach((beneficiary) => {
                rows.push(<RenderTableRows beneficiary={beneficiary} />);
            });
            return rows;
        }*/
    };
    return (
        <div className="beneficiariesTableWrapper">
            <table className="beneficiariesTable">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> User ID </th>
                        <th> Amount </th>
                        <th> Date </th>
                    </tr>
                </thead>
                <tbody className="beneficiariesTableBody">
                    {tableRows()}
                </tbody>
            </table>
        </div>
    );

};

export default RenderBeneficiariesTable;