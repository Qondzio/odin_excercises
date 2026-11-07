import { useEffect, useState } from 'react';
import './main.css'
import rememberPokemon from './game.js'

function MainSection({setScore, setBestScore, bestScore, score}){
    const [pokemons, setPokemons]= useState([]);

    useEffect(()=>{
        (async function fetchData(){
            const url=await fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
            const data= await url.json();
            setPokemons(
                data.results.map((element, index) => {
                    return {
                        name: element.name,
                        spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`
                    }
                })
                );
        })();
    },[])

    
    return(
        <main>
            {pokemons.map((item,index)=>{
                return (
                    <div key={index} className='pokemonCard' onClick={()=>rememberPokemon(item.name, setScore, setBestScore, bestScore, score, setPokemons, pokemons)}>
                        <img src={item.spriteUrl} alt="pokemonSprite" />
                        <div className='pokemonName'>
                            <p>{item.name}</p>
                        </div>
                    </div>
                )
            })}
        </main>
    )
}

export default MainSection