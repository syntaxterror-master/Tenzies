import {useState, useRef, useEffect} from "react"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from "./Die"


export default function App() {

const [dice, setDice] = useState(() => generateAllDice())

const gameWon = dice.every(die => die.isHeld) &&
                dice.every(die => die.value === dice[0].value)


function hold(id){
  setDice(prevDice => prevDice.map(dice => 
    dice.id === id ?
    {...dice, isHeld: !dice.isHeld} 
    : dice
  ))
}

const targetBtn = useRef(null)

useEffect(() => {
  if(gameWon){
    targetBtn.current.focus()
  }
}, [gameWon])

function generateAllDice() {
  return new Array(10)
            .fill(0)
            .map(() => ({
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: nanoid()
            }))}


function rollDice() {
  if(!gameWon){
      setDice(prevDice => prevDice.map(dice =>
      dice.isHeld ?
      dice :
      {...dice, value: Math.ceil(Math.random() * 6)}
    ))
  }else{
    setDice(generateAllDice())
  }
}

const dieElements = dice.map(dieObj => {
    return <Die
    isHeld={dieObj.isHeld}
    value={dieObj.value}
    key={dieObj.id}
    hold={() => hold(dieObj.id)}
    />
})


  return(
    <main>
      {gameWon && <Confetti width={1800}/>}
      <div aria-label="polite" className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same.
         Click each die to freeze it at its current value between rolls.</p>

      <div className="dice-container">
        {dieElements}
      </div>

      <button ref={targetBtn} className="dice-btn" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}
