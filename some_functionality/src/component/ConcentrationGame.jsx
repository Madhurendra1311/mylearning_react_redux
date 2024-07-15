import React, { useState, useEffect } from 'react';
import './ConcentrationGame.css';

const shuffledCards = ["A", "C", "A", "B", "B", "C"];

const ConcentrationGame = () => {
  const [cards, setCards] = useState(shuffledCards.map((card, index) => ({
    id: index,
    value: card,
    isFlipped: false,
    isMatched: false,
  })));
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;

      if (firstCard.value === secondCard.value) {
        setCards(prevCards =>
          prevCards.map(card =>
            card.value === firstCard.value ? { ...card, isMatched: true } : card
          )
        );
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === firstCard.id || card.id === secondCard.id ? { ...card, isFlipped: false } : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards]);

  const handleCardClick = (id) => {
    setCards(prevCards =>
      prevCards.map(card =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );

    const clickedCard = cards.find(card => card.id === id);

    if (flippedCards.length < 2 && !clickedCard.isFlipped && !clickedCard.isMatched) {
      setFlippedCards([...flippedCards, clickedCard]);
    }
  };

  useEffect(() => {
    if (cards.every(card => card.isMatched)) {
      alert("You win!");
    }
  }, [cards]);

  return (
    <div className="game-board">
      {cards.map(card => (
        <div
          key={card.id}
          className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}
          onClick={() => handleCardClick(card.id)}
        >
          {card.isFlipped || card.isMatched ? card.value : '?'}
        </div>
      ))}
    </div>
  );
};

export default ConcentrationGame;
