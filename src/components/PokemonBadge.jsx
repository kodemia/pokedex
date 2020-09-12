
import React, { useEffect, useState } from 'react';

import pokedex from '../lib/pokedex'

import PokemonModal from './PokemonModal'

export default function PokemonCard({ name = '', url = '' }) {
  const [pokemon, setPokemon] = useState({})
  const [image, setImage] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png')
  const [ isSelected, setIsSelected ] = useState(false)

  useEffect(() => {
    pokedex.getPokemonByName(name)
      .then((response) => {
        setImage(response.sprites.front_default)
        setPokemon(response)
      })
  }, [])
  
  return (
    <>
    {isSelected && 
      <PokemonModal
        pokemon={pokemon}
        onClose={() => setIsSelected(false)}
      />
    }
    <article 
      className='pokemon-card'
      onClick={() => setIsSelected(true)}
    >
      <header>
        <img
          src={image }
          alt="pokemon"
        />
      </header>
      <footer>
        {name}
      </footer>
    </article>
    </>
  )
}