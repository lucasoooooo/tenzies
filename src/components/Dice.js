import React from "react"

export default function Dice(props){
    function showBulletFace(){
        if (props.value === 1){
            return <div className="dice die-one">
                <span className="dot" />
            </div>
        }else if (props.value === 2){
            return <div className="dice die-two">
            <span className="dot" />
            <span className="dot" />
        </div> 
        }else if (props.value === 3){
            return <div className="dice die-three">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
        </div> 
        }else if (props.value === 4){
            return <div className="die-four dice">
            <div className="column">
                <span className="dot" />
                <span className="dot" />
            </div>
            <div className="column">
                <span className="dot" />
                <span className="dot" />
            </div>
        </div> 
        }else if (props.value === 5){
            return <div className="die-five dice">
            <div className="column">
                <span className="dot" />
                <span className="dot" />
            </div>
            
            <div className="column">
                <span className="dot" />
            </div>
            
            <div className="column">
                <span className="dot" />
                <span className="dot" />
            </div>
        </div> 
        }else if (props.value === 6){
            return <div className="die-six dice">
                    <div className="column"> 
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                    <div className="column">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                </div> 
        }else{ //invalid number!
            return <p>No Bueno!</p>
        }
    }

    return <div 
            
            style={props.style}
            onClick= {(event) =>props.freeze(event, props.id)}>
                {showBulletFace()}
            </div>
}