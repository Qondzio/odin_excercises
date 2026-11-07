import Header from './Header.jsx';
import GameOverlay from './gameOverlay.jsx';
import { useEffect, useState } from 'react';

function Game(props) {
  const [gameBackground,setGameBackground]=useState(null);
  const [gameCharactersPositions, setgameCharactersPositions]=useState([]);
  const [foundCharacters, setFoundCharacters]=useState([]);
  const [foundPopup, setFoundPopup]=useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3000/map/${props.game}`)
    .then(res=>res.json())
    .then(res=>{            
      setGameBackground(res[0]);
    });
    fetch(`http://localhost:3000/characterPosition/${props.game}`)
    .then(res=>res.json())
    .then(res=>{
      setgameCharactersPositions(res);
    });
  },[]);

  //check if user founded all characters
  useEffect(()=>{
        if(foundCharacters.length===gameCharactersPositions.length && foundCharacters.length>0){
          setFoundPopup(prev =>[...prev, {state: 'win'}]);
          setTimeout(()=> setFoundPopup(prev => prev.slice(1)), 2000);
        }
    },[foundCharacters])


  return (
    <>
      <Header gameCharactersPositions={gameCharactersPositions} foundCharacters={foundCharacters} foundPopup={foundPopup}/>
      <GameOverlay game={props.game} gameBackground={gameBackground} gameCharactersPositions={gameCharactersPositions} foundCharacters={foundCharacters} setFoundCharacters={setFoundCharacters} setFoundPopup={setFoundPopup} />
    </>
  )
}

export default Game;