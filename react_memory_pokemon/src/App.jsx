import { useState } from 'react'
import Heading from './Heading'
import MainSection from './MainSection'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore]= useState(0);

  return (
    <>
      <Heading score={score} bestScore={bestScore}/>
      <MainSection setScore={setScore} setBestScore={setBestScore} bestScore={bestScore} score={score} />
    </>
  )
}

export default App
