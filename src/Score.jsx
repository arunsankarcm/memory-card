import React, { useState } from 'react';
import './cards.css';

const GifGridGameOver = () => {
  const initialGifUrls = [
    'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
    'https://img.pokemondb.net/artwork/large/ivysaur.jpg',
    'https://img.pokemondb.net/artwork/large/venusaur.jpg',
    'https://img.pokemondb.net/artwork/large/charmander.jpg',
    'https://img.pokemondb.net/artwork/large/charmeleon.jpg',
    'https://img.pokemondb.net/artwork/large/charizard.jpg',
  ];

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const [gifUrls, setGifUrls] = useState(initialGifUrls);
  const [prevClickedUrl, setPrevClickedUrl] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const resetGame = () => {
    setGifUrls(initialGifUrls);
    setPrevClickedUrl(null);
    setScore(0);
  };

  const updateHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
    }
  };

  const handleClick = (url) => {
    if (prevClickedUrl === url) {
      alert(`Game Over! Your Score: ${score}`);
      updateHighScore();
      resetGame();
    } else {
      setPrevClickedUrl(url);
      setGifUrls(shuffleArray(gifUrls));
      setScore(score + 1);
    }
  };

  return (
    <div>
      <h1>Memory card Game</h1>
      <h2>dont click the same image twice!!</h2>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
      <div className="gif-container">
        {gifUrls.map((gifUrl, index) => (
          <div
            className="gif-item"
            key={index}
            onClick={() => handleClick(gifUrl)}
          >
            <img src={gifUrl} alt={`GIF ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifGridGameOver;
