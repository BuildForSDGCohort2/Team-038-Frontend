import React from "react";
import data from "./data";
import "./AboutServices.css";

const AboutServices = () => {

    return (
        <div className="helpContent">
            <h1> THIS IS THE ABOUT US PAGE </h1>
            <div id="about" className="section">
                <h2>{data.about.title}</h2>
                <div className="imageContainer"><img src={data.about.image} alt="aboutServiceImg"></img></div>
                <div>{data.about.content.split("<p>").map((item, i) => {
                    return <p key={i}>{item}</p>;
                })}</div>
            </div>
            <div className="dummy"></div>
            <div id="howToSetUpAccount" className="section">
                <h2>{data.howToSetUpAccount.title}</h2>
                <div className="imageContainer"><img src={data.howToSetUpAccount.image} alt="setupAccoutImg"></img></div>
                <div>
                    {data.howToSetUpAccount.content.split("<p>").map((item, i) => {
                        return <p key={i}>{item}</p>;
                    })}
                </div>
            </div>
            <div className="dummy"></div>
            <div id="howToAddBeneficiary" className="section">
                <h2>{data.howToAddBeneficiary.title}</h2>
                <div className="imageContainer"><img src={data.howToAddBeneficiary.image} alt="addBeneficiaryImg"></img></div>
                <div>
                    {data.howToAddBeneficiary.content.split("<p>").map((item, i) => {
                        return <p key={i}>{item}</p>;
                    })}
                </div>
            </div>
            <div className="dummy"></div>
            <div id="howToSchedulePayment" className="section">
                <h2>{data.howToSchedulePayment.title}</h2>
                <div className="imageContainer"><img src={data.howToSchedulePayment.image} alt="schedulePaymentImg"></img></div>
                <div>
                    {data.howToSchedulePayment.content.split("<p>").map((item, i) => {
                        return <p key={i}>{item}</p>;
                    })}
                </div>
            </div>
        </div>
    );
};



export default AboutServices;