import React from "react";
import images from "../../images/images";

/**
 * Table Component it returns a table 
 * which will be populated with transactions data 
 * from a backend req res call
 */

/**
 * create a category row in the table for each transaction data
 */
const TransactionsCategoryRows = (props) => {
    var category = props.category;
    if (category === "fail") {
        return (
            <tr className="transactionFail">
                <th colSpan="3" style={{"fontWeight":"15px"}}>{category}</th>
            </tr>
        );
    } else {
        return (
            <tr>
                <th colSpan="3">{category}</th>
            </tr>
        );
    }
};

/**
 * create a row in the table for each transaction object 
 * base on the category property
 */
const TransactionsRows = (props) => {
    var category = props.transaction.category;
    var user = props.transaction.user;
    var date = props.transaction.date.toLocaleDateString("fr-CA");
    var amount = props.transaction.amount;
    if (category === "sent") {
        return (
            <tr>
                <td className="transactionSent">&#x20A6; {amount}</td>
                <td className="userName">to {" "} {user} </td>
                <td className="date">{date}</td>
            </tr>);
    } else if (category === "fail") {
        return (
            <tr className="transactionFail">
                <td className="transactionFail">&#x20A6; {amount}</td>
                <td className="userName"> {user} </td>
                <td className="date">{date}</td>
            </tr>);
    } else {
        return (
            <tr>
                <td className="transactionRecieved">&#x20A6; {amount}</td>
                <td className="userName">from {" "} {user} </td>
                <td className="date">{date}</td>
            </tr>);
    }
};

/**
 * @param {*} props 
 * transaction history table 
 */
const TransactionsHistoryTable = (props) => {
    const transactions = props.transactions;
    const rows = [];

    //check if the retured transactions Array Object is not empty
    if (transactions.length === 0) {
        rows.push(
            <div className="noTransactions">
                <img src={images.empty_state} alt="no transactions"></img>
                <h4>You have no transactions</h4>
                <p>You haven't made any transactions this month. when you do, they will appear here.</p>
            </div>
        );
    }
    transactions.forEach((transaction) => {
        rows.push(
            <TransactionsCategoryRows category={transaction.category} />
        );
        rows.push(
            <TransactionsRows transaction={transaction} />
        );
    });
    return (
        <table className="transactionsTable">
            <thead>
                <tr>
                    <th>All Transactions </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{rows}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TransactionsHistoryTable;