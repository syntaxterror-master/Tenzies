

export default function Die(props) {

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFF"
  }

  return (
    <button
    style={styles}
    onClick={props.hold}
    className="dice"
    >{props.value}</button>
  )
}