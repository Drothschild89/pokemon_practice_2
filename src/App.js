import "./App.css";
import React, { useState, useEffect } from "react";

// function fetchPokemons() {
//   fetch("https://pokeapi.co/api/v2/pokemon?offset=200")
//     .then((res) => res.json())
//     .then((data) => PokemonList(data.results));
// }

// fetchPokemons();

const PokemonList = (props) => {
  return (
    <React.Fragment>
      <h3>All Pokemons</h3>
      <ul>
        {props.pokemons.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default function App() {
  const [pokemons, setPokemons] = useState([{ name: "Bulbasaur" }]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <div className="App">
      <h1>Pokemons</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
