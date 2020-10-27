import React from "react";
import "./AccountStatement.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  { FiCalendar } from "react-icons/fi";

class AccountStatement extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      setStartDateFilter: false,
      setEndtDateFilter: false,
    };
  }

  handleStartDateChange = (date) => {
    var sDate = date;
    var condition = true;
    this.setState({
      startDate: sDate,
      setStartDateFilter: condition,
    });
  }
  handleEndDateChange = (date) => {
    var eDate = date;
    var conditions = true;
    this.setState({
      endDate: eDate,
      setEndDateFilter: conditions,
    });
  }
  customDate = ({ onClick }) => (
    <div >
      <FiCalendar className="calendarDiv" onClick={onClick} />
    </div>
  );

  render() {

    return (
      <div>
        <h4>Account Settings</h4>
        <p>Get your account statement sent to your mail in few minutes.</p>
        <form className="setForm">
          <div>
            <h5>Filter</h5>
            <div className="filter-option">
              <div className="start-date-pick">
                From:
                  <div className="datePick">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleStartDateChange}
                    customInput={<this.customDate />}
                    dateFormat="yyyy/MM/dd"
                  />
                </div><br />
                <div className="displayStartDate">
                  {this.state.setStartDateFilter ? this.state.startDate.toLocaleDateString("fr-CA") : null}
                </div>
              </div>

              <div className="seperatorLines">
              </div>
              <div className="end-date-pick">
                To:
                  <div className="datePicker">
                  <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleEndDateChange}
                    customInput={<this.customDate />}
                    dateFormat="yyyy/MM/dd"
                  />
                </div><br />
                <div className="displayEndDate">
                  {this.state.setEndDateFilter ? this.state.endDate.toLocaleDateString("fr-CA") : null}
                </div>
              </div>
            </div>
          </div>
          <input id="stmtEmail" type="email" name="email" placeholder="Email" required />
        </form>
        <button className="setBtn">Submit</button>
      </div>
    );
  }
}

export default AccountStatement;