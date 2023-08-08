import React from "react";
import classes from "./Card.module.css";

const Card = ({ cardKey, cardNumber, isFlipped, onFlip }) => {
  return (
    <div
      className={`${classes.card} ${isFlipped ? classes.flipped : ""}`}
      onClick={isFlipped ? null : () => onFlip(cardKey)}
    >
      <div className={classes.x}>?</div>
      <div className={classes.randomNumber}>{cardNumber}</div>
    </div>
  );
};

export default Card;
