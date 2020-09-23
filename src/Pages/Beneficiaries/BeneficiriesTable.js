import React from "react";
import empty from "./img/empty.png";

const NoBeneficiariesFound = () => {
    return (
        <tr>
            <td colSpan="4">
                <div className="flexWrapper">
                    <div>
                        <h6>You have no Beneficiaries</h6>
                        <div className="space"></div>
                        <button>Add them</button>
                    </div>
                    <img src={empty} alt="beneficiariesTableEmpty"></img>
                </div>
            </td>
        </tr>
    );
};

const RenderTableRows = (props) => {
    const beneficiary = props.beneficiary;
    let statusIndicator = () => {
        switch (beneficiary.status) {
            case "pending":
                return (<div className="indicator" style={{ background: "yellow" }}></div>);
            case "failed":
                return (<div className="indicator" style={{ background: "red" }}></div>);
            case "successful":
                return (<div className="indicator" style={{ background: "green" }}></div>);
            default:
                return (<div className="indicator" style={{ background: "yellow" }}></div>);
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
        if (!props.beneficiaries) {
            return <NoBeneficiariesFound />;

        } else {
            props.beneficiaries.forEach((beneficiary) => {
                rows.push(<RenderTableRows beneficiary={beneficiary} />);
            });
            return rows;
        }
    };
    return (
        <div className="beneficiariesTableWrapper">
            <table className="beneficiariesTable">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Transaction ID </th>
                        <th> Amount </th>
                        <th> Date </th>
                    </tr>
                </thead>
                <tbody className="beneficiariesTableBody">
                    {tableRows()}
                </tbody>
            </table>
        </div>
    )

}

export default RenderBeneficiariesTable;