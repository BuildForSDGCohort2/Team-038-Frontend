import React from "react";
import data from "./data";
import Koala from "./Koala.jpg";

class AboutUs extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data
        };
    }

    render() {
        return (
            <div>
                <h1> THIS IS THE ABOUT US PAGE </h1>
                <div id="howToSetUpAccount">
                    <h2> how to create an account</h2>
                    <p>
                        {this.state.data.howToSetUpAccount}
                        <img src={Koala} Koala alt=""></img>
                    </p>
                </div>
                <div id="howToAddBeneficiary">
                    <h2> how to add beneficiries</h2>
                    <p>
                        {this.state.data.howToAddBeneficiary}
                        <img src={Koala} alt=""></img>
                    </p>
                </div>
                <div id="howToSchedulePayment">
                    <h2> how to add schedule payment</h2>
                    <p>
                        {this.state.data.howToSchedulePayment}
                        <img src={Koala} alt=""></img>
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutUs;