import React, { useEffect, useState } from "react";
import classes from "./CardContainer.module.css";
import { getWinner } from "../../../Helper/GetWinner";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";

const CardContainer = ({ onPlayerChange, player }) => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);

  const [flippedCards, setFlippedCards] = useState([]);

  const [matchedCards, setMatchedCards] = useState([]);

  const [history, setHistory] = useState([]);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let cards = [];
    for (let i = 1; i <= 9; i++) {
      cards.push(i, i);
    }
    cards.sort(() => Math.random() - 0.5);
    setCards(cards);
    console.log(cards);
  }, []);

  const handleCardFlip = (cardKey) => {
    if (flippedCards.length < 2) {
      setFlippedCards((prev) => [...prev, cardKey]);
    }
  };

  const updateHistory = (card1, card2, success) => {
    setHistory((prev) => [
      ...prev,
      {
        playerName: player,
        cardsNumber: `Opens Card ${card1 + 1} and ${card2 + 1}`,
        success,
      },
    ]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
      if (cards[card1] === cards[card2]) {
        setMatchedCards((prev) => [...prev, card1, card2]);
        updateHistory(card1, card2, true);
        setCounter(counter + 1);
        if (counter === 8) {
          const data = {
            winData: getWinner(history),
            history: history,
          };
          navigate("/ResultPage", { state: data });
        }
      } else {
        updateHistory(card1, card2, false);
      }
      setTimeout(() => {
        onPlayerChange();
        setFlippedCards(flippedCards.slice(0, -2));
      }, 1000);
    }
  }, [flippedCards]);

  return (
    <div className={classes.CardContainer}>
      {cards.map((number, index) => (
        <Card
          key={index}
          cardKey={index}
          cardNumber={number}
          isFlipped={
            flippedCards.includes(index) || matchedCards.includes(index)
          }
          onFlip={handleCardFlip}
        />
      ))}
    </div>
  );
};

export default CardContainer;
