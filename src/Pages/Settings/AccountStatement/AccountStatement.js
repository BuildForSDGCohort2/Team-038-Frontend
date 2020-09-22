import React from "react";
import "./AccountStatement.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarToday from "../../Transactions/img/calendar_today.png";

class AccountStatement extends React.Component{
  constructor(){
    super();
    this.state = {
      startDate : new Date(),
      endDate : new Date(),
      setStartDateFilter: false,
      setEndtDateFilter: false,
    };
  }
  
  handleStartDateChange = (date) => {
    var sDate = date;
    var condition = true;
    this.setState({
      startDate: sDate,
      setStartDateFilter: condition
    });
  }
  handleEndDateChange = (date) => {
    var eDate = date;
    var condition = true;
    this.setState({
      endDate: eDate,
      setEndDateFilter: condition
    });
  }
  customDate = ({onClick}) => (
    <div className="calendarDiv">
      <img src={calendarToday} alt="today_calendar" onClick={onClick} />
    </div>
  );

  render () {
    
    return(
      <div>
        <h4>Account Settings</h4>
          <p>You can only change your account number and account type</p>
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
                  </div><br/>
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
                  </div><br/>
                  <div className="displayEndDate">
                    {this.state.setEndDateFilter ? this.state.endDate.toLocaleDateString("fr-CA") : null}
                  </div>
                </div>
              </div>
            </div>
            <input id="stmtEmail" type="email" name="email" placeholder="Email" required/>
          </form>
          <button className="setBtn">Save Changes</button>
      </div>
    );
  }
}

export default AccountStatement;