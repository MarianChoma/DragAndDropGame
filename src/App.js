import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';
import './App.css';
import DATA from "./generator.js";
import showHint from "./variants/logic/ShowHint";
import showRules from "./variants/logic/Rules";


function App() {
    const componentRef = useRef();
    const loadFromJson = () => {
        const AllLevels = []
        for (let i = 0; i < DATA.length; i++) {
            AllLevels.push(DATA[i])
        }
        return AllLevels
    }
    const loadFromStorage = () => {
        const playebleLevels = []
        for (let i = 0; i < DATA.length; i++) {
            let item = JSON.parse(localStorage.getItem("level"))[i]
            if (item.completed === "false") {
                playebleLevels.push(item)
            }
        }
        return playebleLevels
    }
    const startgame=()=>{
        const levels = loadFromJson()
        const activeLevel = levels[Math.floor(Math.random() * levels.length)]
        localStorage.setItem("level", JSON.stringify(levels))
        localStorage.setItem("activeLevel", activeLevel.level)
        return activeLevel.htmlTag
    }

    const chooseLevel = () => {
        let findLevel = null
        if (localStorage.getItem("level") === null) {
            return startgame()
        } else {
            const notCompletedLevels = loadFromStorage()
            if (notCompletedLevels.length === 0) {
                return <div>
                    <h1 className="endOfGame">Gratulujeme prešli ste všetky levely</h1>
                    <button className="reset" onClick={()=>{
                        startgame()
                        window.location.reload()}}>Reset</button>
                </div>
            }
            const element = notCompletedLevels[Math.floor(Math.random() * notCompletedLevels.length)]
            for (let i = 0; i < DATA.length; i++) {
                if (DATA[i].level === element.level) {
                    localStorage.setItem("activeLevel", element.level)
                    return DATA[i].htmlTag
                }
            }
        }
    }
    return (
        <div>
            <header>
                <h1 className="title">Finálne zadanie</h1>
            </header>
            <div className="menu">
                <button onClick={() => {
                    window.location.reload()
                }}>Ďalej
                </button>
                <button className="rules" onClick={showRules}>Pravidlá</button>
                <button onClick={showHint}>Nápoveda</button>
                <ReactToPrint
                    trigger={() => <button className="print">Vytlačiť</button>}
                    content={() => componentRef.current}/>
            </div>
            <div ref={componentRef}>
                {chooseLevel()}
            </div>
            <div className="tooltip">
            </div>
        </div>
    );
}

export default App;

