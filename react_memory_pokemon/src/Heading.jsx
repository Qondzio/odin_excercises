import './Heading.css'

function Heading({score, bestScore}) {
  
  return (
    <header>
      <span>
        <h1>Memory game</h1>
        <span className='scoreboard'>
          <h3>Score: {score}</h3>
          <h3>Best score: {bestScore}</h3>
        </span>
      </span>
      <h3>Get points by clicking on an image but don't click on any more than once!</h3>
    </header>
  )
}

export default Heading