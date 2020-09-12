
import React, { useEffect, useState } from 'react';

export default function PokemonModal ({ pokemon = {}, onClose= () => {} }) {
  console.log('pokemon: ', pokemon)
  return (
    <section className='pokemonModal'>
      <header>
        { pokemon.name }
      </header>
      <div className='content'>
        {/* { JSON.stringify(pokemon) } */}
        <img 
          src={pokemon.sprites.front_default} 
          alt={pokemon.name}
        />
        <div className='info'>
          <div className='info-section'>
            <h2> Habilidades </h2>
            { 
              (pokemon.abilities || []).slice(0, 5).map(ability => (
              <p>
                {'>'} {ability.ability.name}
              </p>
              ))
            } 
          </div>
          <div className='info-section'>
            <h2> Ataques </h2>
            <div className='list'>
              { 
                (pokemon.moves || []).slice(0, 5).map(move => (
                <p>
                  {'>'} {move.move.name}
                </p>
                ))
              } 
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div 
          className='close'
          onClick={() => onClose()}
        >
          OK
        </div>
      </footer>
    </section>
  )
}
