import {useNavigate} from 'react-router'
import styles from './assets/styles/welcomePage.module.css'
import waldo1 from './assets/waldo1.jpg'
import waldo2 from './assets/waldo2.jpg'
import waldo3 from './assets/waldo3.jpg'

function welcomePage(){
    const navigate=useNavigate();

    return(
    <>
        <div className={styles.chooseLevel}>
            <div className={styles.level} onClick={()=>navigate('/game1')}>
                <img src={waldo1} alt="waldo1" />
                <span>
                    <p>Level 1</p>
                </span>
            </div>
            <div className={styles.level} onClick={()=>navigate('/game2')} >
                <img src={waldo2} alt="waldo2" />
                <span>
                    <p>Level 2</p>
                </span>
            </div>
            
                <div className={styles.level} onClick={()=>navigate('/game3')}>
                    <img src={waldo3} alt="waldo3" />
                    <span>
                        <p>Level 3</p>
                    </span>
                </div>
            
        </div>
    </>
    )
}

export default welcomePage;