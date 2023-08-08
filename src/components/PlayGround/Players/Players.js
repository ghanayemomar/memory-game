import classes from "./Players.module.css";

const Players = ({ activePlayer }) => {
  return (
    <div className={classes.PlayTurnContainer}>
      <h2 className={activePlayer === "Player 1" ? classes.active : ""}>
        Player 1
      </h2>
      <h2 className={activePlayer === "Player 2" ? classes.active : ""}>
        Player 2
      </h2>
    </div>
  );
};

export default Players;
