import { useState, useEffect } from "react";
import { shuffle } from "../helpers/fyshuffle";
import Card from "./Card";

const Game = () => { 

  // Hold current set of Pokemon and high score in state
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokeCards, setPokeCards] = useState([9,55,62,73,80,87,91,99,117,119,121,130,131,134,139,141]);
  const [clickedIds, setClickedIds] = useState([]);

  const handleClick = e => {
    e.preventDefault();
    setPokeCards(shuffle([...pokeCards]));
    setScore(score + 1);
    if (score + 1 > highScore && !clickedIds.includes(e.currentTarget.id)) {
      setHighScore(score + 1);
    };

    clickedIds.includes(e.currentTarget.id) ? reset() : setClickedIds([...clickedIds, e.currentTarget.id]);
  }

  const reset = () => {
    setPokeCards(shuffle([...pokeCards]));
    setScore(0);
    setClickedIds([]);
  }

  return (
    <>
      <div id="title">Remembo!</div>
      <p>Score: {score} / 16</p>
      <p>High Score: {highScore}</p>
      <div id="content">
        {pokeCards.map(id => <Card id={id} handleClick={handleClick} key={id}/>)}
      </div>
    </>
  )
}

export default Game;