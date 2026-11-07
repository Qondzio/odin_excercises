import waldoHeader from './assets/waldoHeader.png'
import './assets/styles/header.css'
import { useNavigate } from 'react-router';

function Header(props){
    const navigate=useNavigate();
    const characters=props.gameCharactersPositions;
    
    return(
    <>
        <div className='popups'>
        {props.foundPopup?.length>0 &&(
            props.foundPopup.map((popup, id)=>{
                if(popup.state === false){
                    return (<div className='popup_false' key={id}>
                <p>❌ This character is not in this place</p>
            </div>)
                }
                else if(popup.state === true){
                    return(
                        <div className='popup' key={id}>
                <p>✅ Nice! You've found a character.</p>
            </div>
                    )
                }
                else if(popup.state === 'win'){
                    return(<div className='game_won_popup' key={id}>
                <p>🏆 Congratulations!!! You've found all characters!</p>
            </div>)
                }
            })
        )}
            
        </div>
        <header>
            {characters && (
                <div className='characters'>
                    {characters.map((character, id) =>{
                        const isFound=props.foundCharacters.includes(character.name);
                        return <img src={character.image_path} alt='character-image' width='64px' height='64px' key={id} style={{opacity: isFound ? 0.3:1}}></img>;
                    })}
                </div>
            )}
            <img src={waldoHeader} alt="waldo-header" className='header_img'/>
            <span onClick={()=>navigate('/')}>
                <p className='blue'>Where's</p>
                <p className='red'>Waldo?</p>
            </span>
        </header>
    </>
    )
}

export default Header;