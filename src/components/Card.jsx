import { useState, useEffect } from "react";

const Card = ({id, handleClick, reset}) => {
  const [pokeName, setPokeName] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`,{ mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        setPokeName(response.name);
        setImageUrl(response.sprites.other["official-artwork"].front_default)})
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="card" id={id} onClick={handleClick}>
      <img 
        src={imageUrl}
        alt={pokeName}
      />
      <p>
        {pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}
      </p>
    </div>
  )
}

export default Card;