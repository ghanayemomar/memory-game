import React from "react";
import classes from "./WinnerScore.module.css";

const WinnerScore = ({ player, score }) => {
  return (
    <div className={classes.WinnerResult}>
      <div>
        <h3>Winner Is {player}</h3>
      </div>
      <div>
        <h3>Number of correct cards</h3>
        <span>{score}</span>
      </div>
    </div>
  );
};

export default WinnerScore;
