import React from "react";
import images from "../../images/images";

/** 
 * Renders an empty state if the current user has no benefactor to display
 * This component is returned when the benefactor object is epty
 */
const NoBenefactorFound = () => {
    return (
        <tr>
            <td colSpan="4">
                <div className="flex-wrapper">
                    <div className="emptyInfo ">
                        <img src={images.no_benefactor} alt="No benefactors yet"></img>
                    </div>
                    <div className="emptyImg ">
                    <img src={images.empty_state} alt="no benefactor"></img>
                    </div>
                </div>
            </td>
        </tr>
    );
};

/** 
 * Renders table rows 
 * This component  recieves benefactor object as "props" and creates a table row for each element
 * creates a table row for each benefactor
 */
const RenderTableRows = (props) => {
    const benefactor = props.benefactor;
    let statusIndicator = () => {
        switch (benefactor.details.status) {
            case "active":
                return (<img src={images.active_state} alt="vector"></img>);
            case "not-active":
                return (<img src={images.inactive_state} alt="vector"></img>);

            default:
                return (<img src={images.active_state} alt="vector"></img>);
        }
    };
    return (
        <tr className="benefactorsTableRows">
            <td>{(statusIndicator())} {benefactor.benefactor_name}</td>
            <td>{benefactor.benefactor_id}</td>
            <td>{benefactor.details.amount}</td>
            <td>{benefactor.details.pay_date}</td>
        </tr>
    );
};

const RenderBenefactorsTable = (props) => {
    const rows = [];

    //return "NoBenefactorFound" component if "props === null". i.e if the current user has no benefactors
    var tableRows = () => {
        if (!props.benefactors) {
            return <NoBenefactorFound />;
        } else {
            props.benefactors.forEach((benefactor) => {
                rows.push(<RenderTableRows benefactor={benefactor} />);
            });
            return rows;
        }
    };
    return (
        <div className="benefactorsTableWrapper">
            <table className="benefactorsTable">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> User ID </th>
                        <th> Amount </th>
                        <th> Date </th>
                    </tr>
                </thead>
                <tbody className="benefactorsTableBody">
                    {tableRows()}
                </tbody>
            </table>
        </div>
    );

};

export default RenderBenefactorsTable;