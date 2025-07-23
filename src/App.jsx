import {useState} from "react"
import Die from "./Die"


export default function App() {

const [dice, setDice] = useState(() => generateAllDice())

function generateAllDice() {
  return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
}

function rollDice() {
  setDice(generateAllDice())
}

const dieElements = dice.map(die => {
    return <Die value={die}/>
})


  return(
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same.
         Click each die to freeze it at its current value between rolls.</p>

      <div className="dice-container">
        {dieElements}
      </div>

      <button className="dice-btn" onClick={rollDice}>Roll</button>
    </main>
  )
}
