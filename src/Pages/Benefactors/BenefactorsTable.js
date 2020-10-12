import React from "react";
import empty from "./img/empty.png";
import noBenefactor from "./img/noBenefactor.png";
import vector from "./img/Vector.png";
import vector2 from "./img/Vector2.png";


const NoBenefactorFound = () => {
    return (
        <tr>
            <td colSpan="4">
                <div className="flex-wrapper">
                    <div>
                        <img src={noBenefactor} alt="No benefactors yet"></img>
                    </div>
                    <img src={empty} alt="no benefactor"></img>
                </div>
            </td>
        </tr>
    );
};

const RenderTableRows = (props) => {
    const benefactor = props.benefactor;
    let statusIndicator = () => {
        switch (benefactor.status) {
            case "verified":
                return (<img src={vector} alt="vector"></img>);
            case "not-verified":
                return (<img src={vector2} alt="vector"></img>);

            default:
                return (<img src={vector} alt="vector"></img>);
        }
    };
    return (
        <tr className="benefactorsTableRows">
            <td>{(statusIndicator())} {benefactor.name}</td>
            <td>{benefactor.userID}</td>
            <td>{benefactor.amount}</td>
            <td>{benefactor.date}</td>
        </tr>
    );
};

const RenderBenefactorsTable = (props) => {
    const rows = [];

    var tableRows = () => {
        return <NoBenefactorFound />;
        /** if (!props.benefactors) {
              return <NoBenefactorFound />;
  
          } else {
              props.benefactors.forEach((benefactor) => {
                  rows.push(<RenderTableRows benefactor={benefactor} />);
              });
              return rows;
          }*/
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