import React from "react";
import "./HowWeWork.css";
import { Link } from "react-router-dom";

const howWeWork = () => {
    return (
        <div className="how-we-work-section">
            <h2> Three Steps To Less Worries </h2>
            <div className="container " >
                <Link to="/about/#howToSetUpAccount" className="btn-flat">
                    <div className="signup column">
                        <div className="title"> SIGN <br /> UP </div>
                        <p>
                            signup for a personal  or business account to get started...
                        </p>
                        <div className="image"></div>
                    </div>
                </Link>
                <div className="dummy"></div>
                <Link to="/about/#howToAddBeneficiary" className="btn-flat ">
                    <div className="add-beneficiary column">
                        <div className="title"> ADD <br /> BENEFACTOR </div>
                        <p>
                            select and add beneficiaries you want to transfer money to...
                        </p>
                        <div className="image"></div>
                    </div>
                </Link>
                <div className="dummy"></div>
                <Link to="/about/#howToSchedulePayment" className="btn-flat ">
                    <div className="schedule-payment column">
                        <div className="title"> SCHEDULE <br /> PAYMENT </div>
                        <p>
                            schedule payment to automate transfer to your beneficiaries...
                        </p>
                        <div className="image"></div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default howWeWork;