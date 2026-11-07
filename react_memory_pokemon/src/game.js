let clickedPokemons=[];


function schuffleCards(setPokemons, pokemons){
    const newArray=[...pokemons]
    for (let i = newArray.length - 1; i > 0; i--) {
        const randomIndex=Math.floor(Math.random()*(i + 1))
        const temp=newArray[i]
        newArray[i]=newArray[randomIndex]
        newArray[randomIndex]=temp
    }
    setPokemons(newArray)
}

function rememberPokemon(pokemon, setScore, setBestScore, bestScore, score, setPokemons, pokemons){
    if(clickedPokemons.includes(pokemon)){
        if(score>bestScore)setBestScore(score)
        setScore(0)
        clickedPokemons=[]
    }
    else{
        setScore(score=>score+1)
        clickedPokemons.push(pokemon)
    }    
    schuffleCards(setPokemons, pokemons)
}

export default rememberPokemon
export {schuffleCards}