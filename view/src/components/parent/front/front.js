import "./front.css"
import React, { useState } from 'react';

import { HoverBtn } from "../../ui/btn/howerBtn.js"

export function Revise() {

    let [wod, getWord] = useState("");

    let word;
    const handleClick = (e) => {
        e.preventDefault();
        getWord(wod = "harsh")
        word = wod;
        console.log(word)
    }

    function renderWord() {
        return word;
    }

    return (
        <>
            <div className="left">
                <div class="front-left">
                    <div class="revRusDiv">
                        <div className="queDiv">
                            <p className="centerText"> What is the meaning Of the word</p>
                        </div>
                        <span className="span">{wod}</span>
                    </div>
                    <div class='hoverBtn'>
                        <HoverBtn
                            text={"Click To Revise"}
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

function CurrentWod() {
    const handleClick = (e) => {
        document.getElementById('main').style.transform = 'rotateY(180deg)';
    }
    return (
        <>
            <div className="right">
                <button onClick={handleClick}>flip</button>
                <div>Today's Word of the day is </div>
                <div>Result</div>
            </div>
        </>
    )
}



export function Front() {
    return (
        <>

            <div className="front">
                <Revise />
                <CurrentWod />
            </div>

        </>
    )
}

