import {useState} from "react"
import { nanoid } from 'nanoid'
import Die from "./Die"


export default function App() {

const [dice, setDice] = useState(() => generateAllDice())

function hold(id){
  setDice(prevDice => prevDice.map(dice => 
    dice.id === id ?
    {...dice, isHeld: !dice.isHeld} 
    : dice
  ))
}

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

const gameWon = dice.every(die => die.isHeld) &&
                dice.every(die => die.value === dice[0].value)

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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same.
         Click each die to freeze it at its current value between rolls.</p>

      <div className="dice-container">
        {dieElements}
      </div>

      <button className="dice-btn" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}
