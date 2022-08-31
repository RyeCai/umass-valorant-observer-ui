import React from "react"
import {maps, mapScore, leftTeam, rightTeam} from "./components/match-variables.js"

function MapInfo() {
    return (
        <div className="top-info">
            <div className="map-info">
                {maps.current && <div className="rectangle">
                    Current: {maps.current}
                    <img src={rightTeam.logoPath}/>
                </div>}
                {maps.next && <div className="rectangle">
                    Next Map: {maps.next}
                    <img src={leftTeam.logoPath}/>
                </div>}
                {maps.decider && <div className="rectangle">
                    Decider: {maps.decider}
                </div>}
            </div>
        </div>
    );
}

// function Maps(props) {
//     return (
//         {props.map && <div className="rectangle">
//             Current: {props.current}
//             <img src={'../assets/UI/'+props.logoPath}/>
//         </div>}
//     );
// }

function MapScore() {
    
}

function MatchInfo() {
    
    return (
        <div className="match-info">
            <div class="map-score"></div>
            <div id="top-bar">
                <div className="left-team">
                    <div className="name-logo">
                        {leftTeam.logoPath && <img src={`../assets/UI/${leftTeam.logoPath}`} className="team-logo"/>}
                        <h1 className="team-name">{leftTeam.teamName}</h1>
                    </div>
                    <h1 className="round-score">9</h1>
                </div>
                <div id="round-time"></div>
                <div className="right-team">
                    <h1 className="round-score">3</h1>
                    <div className="name-logo">
                        <h1 className="team-name">{rightTeam.teamName}</h1>
                        {rightTeam.logoPath && <img src={`../assets/UI/${rightTeam.logoPath}`} className="team-logo"/>}
                    </div>
                </div>
            </div>
            <div class="map-score">

            </div>
        </div>
    );
}

export default function TopContainer() {
    return (
        <div className="top-container">
            <MapInfo />
            <MatchInfo />
            <div className="top-info"></div>
        </div>
    );
}