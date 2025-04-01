import { useState, useEffect } from "react";
import '../styles/Card.css';

// Pass pokemon dex number as id prop and click handler to child component
const Card = ({id, handleClick}) => {
  const [pokeName, setPokeName] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  // Fetch the names and images from pokeapi.co using the pokemon's dex number
  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`,{ mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        setPokeName(response.name);
        setImageUrl(response.sprites.other["official-artwork"].front_default)})
      .catch((error) => console.error(error));
  }, []);

  // Generate card with the returned image and name string
  return (
    <div className="card" id={id} onClick={handleClick}>
      <img
        className="portrait"
        src={imageUrl}
        alt={pokeName}
      />
      <p className="pokename">
        {pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}
      </p>
    </div>
  )
}

export default Card;