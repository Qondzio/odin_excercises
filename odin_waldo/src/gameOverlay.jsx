import styles from './assets/styles/gameOverlay.module.css'
import { useEffect,useRef, useState } from 'react';

function gameOverlay(props){
    const [pos,setPos]=useState(null);
    const gameOverlayRef=useRef(null);
    const [onScreenPosition, updateOnScreenPosition]=useState([]);

console.log(onScreenPosition);
console.log(pos);

    //get position of where users clicked
    const getPosition = (e)=>{
        console.log(e);
        
        if(pos){
            setPos(null);
        }
        else{
            const currentPosition=gameOverlayRef.current.getBoundingClientRect();
            const x=e.clientX-currentPosition.x;
            const y=e.clientY-currentPosition.y;
            
            setPos({x,y});         
        }
    }

    

    //load characters positions on the screen
    useEffect(() => {
    if (props.gameBackground && props.gameCharactersPositions?.length > 0) {
        const screenSize = gameOverlayRef.current.getBoundingClientRect();

        const responsivePosition = props.gameCharactersPositions.map(character => ({
            name: character.name,
            positionX: (character.positionx / props.gameBackground.image_width) * screenSize.width,
            positionY: (character.positiony / props.gameBackground.image_height) * screenSize.height,
            width: (character.width / props.gameBackground.image_width) * screenSize.width,
            height: (character.height / props.gameBackground.image_height) * screenSize.height
        }));

        updateOnScreenPosition(responsivePosition);
    }
}, [props.gameBackground, props.gameCharactersPositions]);

    
    //check if character is on user's clicked position
    function checkCharacterPosition(selectedPosition, name){
        if(onScreenPosition){
            let selectedCharacter=onScreenPosition.find((value)=>{
                return name === value.name;
            });
        if((selectedPosition.x>=selectedCharacter.positionX && selectedPosition.x<=selectedCharacter.positionX+selectedCharacter.width)
        &&(selectedPosition.y>=selectedCharacter.positionY && selectedPosition.y<=selectedCharacter.positionY+selectedCharacter.height))
        {
            props.setFoundCharacters(prev =>{
                if(!prev.includes(name)){
                    return [...prev, name];
                }
                return prev;
            });
            if(props.foundCharacters.length!==props.gameCharactersPositions.length) props.setFoundPopup(prev =>[...prev, {state: true}]); 
            setTimeout(()=> props.setFoundPopup(prev => prev.slice(1)), 2000);
                     
            
        }
        else{
            props.setFoundPopup(prev =>[...prev, {state: false}]);
            setTimeout(()=> props.setFoundPopup(prev => prev.slice(1)), 2000);
        }
    }
    }

    return(
    <>
        <div className={styles.gameOverlay} ref={gameOverlayRef} onClick={getPosition}>
            {props.gameBackground &&(
                <>
                    <img src={props.gameBackground.image_path} alt="game-background"></img>
                </>
            )}
            {pos && (
                <>
                    {onScreenPosition.length >0 && (
                        <div className={styles.displayPoput} style={{top:pos.y+'px', left:pos.x+'px'}}>
                        <div className={styles.selectedPosition}/>
                        <div className={styles.selectHero}>
                            
                                {props.gameCharactersPositions.map((icon, id) =>{
                                    return(
                                        <span key={id} onClick={()=>checkCharacterPosition(pos, icon.name)}>
                                            <img src={icon.image_path} alt="character_head"/>
                                            <p style={{textTransform:"capitalize"}}>{icon.name}</p>
                                        </span>
                                    )
                                })}
                        </div>
                    </div>
                    )}
                </>
            )}
        </div>
    </>
    )
}

export default gameOverlay;