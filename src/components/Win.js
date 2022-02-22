import React from "react"

export default function Win(props){
    const timeBar = props.time <= props.bestTime? 
        <p>New lowest time! {props.time}</p> :
        <div>
        <p>Your Time: {props.time}</p>
        <p> Time to beat: {props.bestTime}</p>
        </div>

    return <div className="win-banner">
        <p style={{color:"rgb(81, 0, 233)"}}>YOU WIN!</p>
        <p>Number of Rolls: </p>
        <p>{props.numRolls}</p>
        <p>{timeBar}</p>
        <p className="play-again" onClick={props.playAgain}>Play Again?</p>
        </div>
}