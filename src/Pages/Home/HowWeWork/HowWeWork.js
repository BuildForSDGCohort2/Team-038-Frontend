import React from "react";
import "./HowWeWork.css";

const howWeWork = () => {
    return (
        <div className="how-we-work-section">
            <h2> Three Steps To Less Worries </h2>
            <div className="container row" >
                <div className="signup column">
                    <div className="title"> SIGN <br /> UP </div>
                    <p>
                        signup for a personal  or business account to get started
                        </p>
                    <div className="image"></div>
                </div>
                <div className="add-beneficiary column">
                    <div className="title"> ADD <br /> BENEFACTOR </div>
                    <p>
                        select and add beneficiaries you want to transfer money to
                        </p>
                    <div className="image"></div>
                </div>
                <div className="schedule-payment column">
                    <div className="title"> SCHEDULE <br /> PAYMENT </div>
                    <p>
                        schedule payment to automate transfer to your beneficiaries
                        </p>
                    <div className="image"></div>
                </div>
            </div>
        </div>
    );
};
export default howWeWork;