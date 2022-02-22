import React from "react"
import Dice from "./components/Dice"
import Win from "./components/Win"

export default function App() {
  function genNewDice(){
    //Generate 10 new dice
    const die =[]
    for (let i =0; i <10; i++){
      const newDie = {
        id:i,
        number:genRand(),
        frozen:false
      }
      die.push(newDie)
    }
    return die
  }

  const [dice, setDice] = React.useState(genNewDice())
  const [tenzie, setTenzie] = React.useState({tenzie: false, numRolls: 0})
  const [timer, setTimer] = React.useState(Date.now())
  

  function genRand(){
    const maxNumber = 6
    const minNumber = 1

    return Math.floor(Math.random() * 
        (maxNumber+1-minNumber) + minNumber)
  }
  
  function randomRoll(){
    setTenzie(prev => ({...prev, numRolls: prev.numRolls+1}))
    setDice(prev => prev.map(die =>({
      ...die, number: die.frozen? die.number:genRand()
    })))
  }

  function freeze(event, id){
    const newDice= []
    for (let i =0; i < dice.length; i++){
      const die = dice[i]
      if (die.id === id){
        const d ={
          id:die.id,
          number:die.number,
          frozen:die.frozen?false:true
        }  
        newDice.push(d)
      } else{
        newDice.push(die)
      }
    }
    setDice(newDice)
  }

  function checkWin(){
    // console.log(dice)
    for (let i =1; i< dice.length; i ++){
      if (dice[i].number !== dice[i-1].number){
        return false
      }
    }

    if (timePassed < (JSON.parse(localStorage.getItem("bestTime")))){
      localStorage.setItem("bestTime", JSON.stringify(timePassed))
    }

    return true
  }

  function playAgain(){
    setDice(genNewDice())
    setTenzie({tenzie: false, numRolls: 0})
    setTimer(Date.now())
    // console.log(dice)
  }

  const diceElements = dice.map(d =>
    <Dice 
      key = {d.id}
      id = {d.id}
      value = {d.number}
      frozen= {d.frozen} 
      freeze= {freeze}
      style = {{backgroundColor: d.frozen? "lightskyblue":"white"}}
      />)
  
  React.useEffect(()=>{
    setTenzie(prev => ({...prev , tenzie: checkWin() ? true:false}))
    // {console.log(tenzie.numRolls)}
  }, [dice])
  
  const timePassed = Math.floor((Date.now()-timer)/1000)

  return (
    <div className="app">
      <header>
        <h1>Tenzies</h1>
        <p>Rolls until all dice are the same.
          Click each die to freeze it at its current
            value between rolls.</p>
      </header>
      <div className="dice-container">
        {diceElements}
      </div>
      <h2 className="roll-butn"
      onClick={randomRoll}>Roll Dice</h2>
      {/* <h3>Time: {Math.floor((Date.now()-timer)/1000)}</h3> */}
      {tenzie.tenzie && <Win playAgain={playAgain}
                            time =  {timePassed}
                            bestTime = {JSON.parse(localStorage.getItem("bestTime"))}
                            numRolls={tenzie.numRolls}/>}
    </div>
  );
}

