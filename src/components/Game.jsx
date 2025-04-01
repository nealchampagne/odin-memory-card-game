import { useState } from "react";
import { shuffle } from "../helpers/fyshuffle";
import Card from "./Card";
import '../styles/Game.css';

const Game = () => { 

  /** Hold current set of Pokemon, whether the corresponding card
   *  has been clicked, current score, and high score in state. */
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokeCards, setPokeCards] = 
    useState([9,55,62,73,80,87,91,99,117,119,121,130,131,134,139,141]);
  const [clickedIds, setClickedIds] = useState([]);

  /** Shuffle cards, check if clicked, increment score/high score,
   *  reset as necessary */
  const handleClick = e => {
    e.preventDefault();
    setPokeCards(shuffle([...pokeCards]));
    setScore(score + 1);
    if (score + 1 > highScore && !clickedIds.includes(e.currentTarget.id)) {
      setHighScore(score + 1);
    };

    clickedIds.includes(e.currentTarget.id) ? reset() : setClickedIds([...clickedIds, e.currentTarget.id]);
  }

  // Set score to zero and clear clicked array on reset
  const reset = () => {
    setScore(0);
    setClickedIds([]);
  }

  // Generate main page content
  return (
    <>
      <header>
        <div id="title">Gotta Click 'em All!</div>
        <div className="scorecontainer">
          <p>Score: {score} / 16</p>
          <p>High Score: {highScore} / 16</p>
        </div>
      </header>
      <div id="content">
        {pokeCards.map(id => <Card id={id} handleClick={handleClick} key={id}/>)}
      </div>
    </>
  )
}

export default Game;