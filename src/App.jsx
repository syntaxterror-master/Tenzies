
export default function App() {
  return(
    <main>

      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same.
         Click each die to freeze it at its current value between rolls.</p>

      <div className="dice-container">
        <button className="dice">1</button>
        <button className="dice">1</button>
        <button className="dice">1</button>
        <button className="dice">1</button>
        <button className="dice">1</button>
        <button className="dice">1</button>
        <button className="dice">1</button>
        <button className="dice">1</button>
        <button className="dice">1</button>
        <button className="dice">1</button>
      </div>

      <button className="dice-btn">Roll</button>
    </main>
  )
}
