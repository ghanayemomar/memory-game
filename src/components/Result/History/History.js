import React from "react";
import classes from "./History.module.css";
import { Link } from "react-router-dom";
const History = ({ data }) => {
  return (
    <div className={classes.history}>
      <p>History:</p>
      <table className={classes.table}>
        <thead className={classes.header}>
          <tr>
            <th>Player Name</th>
            <th>Cards Number</th>
            <th>Success</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record, index) => (
            <tr key={index} className={classes.row}>
              <td>{record.playerName}</td>
              <td>{record.cardsNumber}</td>
              <td>{record.success ? "True" : "False"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.button}>
        <Link to="/">Play Again</Link>
      </div>
    </div>
  );
};

export default History;
