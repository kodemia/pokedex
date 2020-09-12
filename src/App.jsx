import React, { useEffect, useState } from 'react';

import pokedex from './lib/pokedex'
import './styles.scss';

import PokemonBadge from './components/PokemonBadge'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    pokedex.getPokemonsList({ limit: 150 })
      .then(response => {
        const pokemonsList = response.results
        setPokemons(pokemonsList)
      })
  }, [])
  
  return (
    <>
      <nav className="App-header">
        <img 
          src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' 
          className="App-logo"
          alt="pokeapi" 
        />
      </nav>
      <main>
        <section className='results'>
          {
            pokemons.map((pokemon) => {
              return (
                <PokemonBadge 
                  name={pokemon.name}
                  url={pokemon.url}
                  key={pokemon.name}
                />
              )
            })
          }
        </section>
        <footer>
          <div> Anterior </div>
          <div> Siguiente </div>
        </footer>
      </main>
    </>
  );
}

export default App;
