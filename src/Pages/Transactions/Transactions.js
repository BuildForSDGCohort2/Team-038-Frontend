import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Transactions.css";
import TransactionsHistoryTable from "./TransactionsHistoryTable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar_today from "./img/calendar_today.png";

// Temporary Dummy Data 
import data from "./data.js";

/**
 * Transaction Component which display the history of all 
 * transactions that has been performed by a user over time
 */
class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      transactions: [],
      setStartDateFilter: false,
      setEndtDateFilter: false,
    }
  }

  //called when a user picks a filter start date
  handlesStartDateChange = date => {
    this.setState({
      startDate: date,
      setStartDateFilter: true,
    })
  };

  //called when a user picks a filter end date
  handlesEndDateChange = date => {
    this.setState({
      endDate: date,
      setEndDateFilter: true
    })
  };
  
  //make a get request to the backend and fetch transactions 
  getTransactions = () => {
    const Alltransactions = data ? data : []
    this.setState(state => {
      return {
        transactions: Alltransactions
      }
    })
  }

  /**
   * Customise input component for the date picker component
   * replace the default date picker component with with a calendar icon
   */
  DatePickerCustomInput = ({ onClick }) => (
    <div className="calendar_today">
      <img src={calendar_today} alt="calendar_today" onClick={onClick}></img>
    </div>
  );

  componentDidMount() {
    this.getTransactions();
  }

  render() {
    return (<div className="Transactions">
      <div className="gridContainer">
        <div className="topLeft grid-col1">
          <h3>Transactions</h3>
          <div className="todayDate">
            {new Date(Date.now()).toDateString("fr-CA")}
          </div>
        </div>
        <div className="topRight grid-col2">
          <Link to="" className="sendMoney-btn">
            <button >Send Money</button>
          </Link>
        </div>
        <div className="bottomLeft  grid-col3">
          <div className="filter gridBox">
            <div className="box1" >
              Filter
            </div>
            <div className="start-date-picker box2">
              From:
              <div className="datePicker">
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handlesStartDateChange}
                  customInput={<this.DatePickerCustomInput />}
                  dateFormat="yyyy/MM/dd"
                />
              </div>
              <div className="displayStartDate">
                {this.state.setStartDateFilter ? this.state.startDate.toLocaleDateString("fr-CA") : null}
              </div>
            </div>
            <div className="seperatorLine box3">
            </div>
            <div className="end-date-picker box4">
              To:
              <div className="datePicker">
                <DatePicker
                  selected={this.endDate}
                  onChange={this.handlesEndDateChange}
                  customInput={<this.DatePickerCustomInput />}
                  dateFormat="yyyy/MM/dd"
                />
              </div>
              <div className="displayEndDate">
                {this.state.setEndDateFilter ? this.state.endDate.toLocaleDateString("fr-CA") : null}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bottomRigt grid-col4">
            <div className="allTransactions">
              <TransactionsHistoryTable
                transactions={this.state.transactions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Transactions;
