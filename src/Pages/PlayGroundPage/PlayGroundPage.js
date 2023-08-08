import CardContainer from "./../../components/PlayGround/CardContainer/CardContainer";
import Player from "../../components/PlayGround/Players/Players";
import React, { useState } from "react";

const PlayGroundPage = () => {
  const [playerTurn, setPlayerTurn] = useState("Player 1");

  const handlePlayerChange = () => {
    setPlayerTurn((prevPlayer) =>
      prevPlayer === "Player 1" ? "Player 2" : "Player 1"
    );
  };

  return (
    <>
      <Player activePlayer={playerTurn} />
      <CardContainer onPlayerChange={handlePlayerChange} player={playerTurn} />
    </>
  );
};

export default PlayGroundPage;
