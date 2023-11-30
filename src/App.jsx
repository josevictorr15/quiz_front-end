import Welcome from './components/Welcome'
import './App.css'
import Questions from './components/Questions'
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'
import GameOver from './components/GameOver'
import PickCategory from './components/PickCategory'

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <>
    <div className="App">
      <h1>Quiz de Front-end</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Category" && <PickCategory/>}
      {quizState.gameStage === "Playing" && <Questions/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
    </>
  )
}

export default App
