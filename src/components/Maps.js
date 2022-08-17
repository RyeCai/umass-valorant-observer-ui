function MapInfo(props) {
    return (
        <div className="top-info">
            <div className="map-info">
                {props.current && <div className="rectangle">
                    Current: {props.current}
                    <img src={props.team1Logo}/>
                </div>}
                {props.next && <div className="rectangle">
                    Next Map: {props.next}
                    <img src={props.team2Logo}/>
                </div>}
                {props.decider && <div className="rectangle">
                    Decider: {props.decider}
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

function MatchInfo() {
    return (
        <div className="match-info">
            <div id="top-bar">
                <div className="left-team">
                    <div className="name-logo">
                        <img src="../assets/UI/fnatic.png" className="team-logo" id="team1"/>
                        <h1 className="team-name">FNC</h1>
                    </div>
                    <div style="width: 8%;"></div>
                    <h1 className="round-score">9</h1>
                </div>
                <div id="round-time"></div>
                <div className="right-team">
                    <h1 className="round-score">3</h1>
                    <div style="width: 8%;"></div>
                    <div className="name-logo">
                        <h1 className="team-name">FNC</h1>
                        <img src="../assets/UI/fnatic.png" className="team-logo" id="team1"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TopContainer(props) {
    return (
        <div className="top-container">
            <MapInfo />
            <MatchInfo />
            <div className="top-info"></div>
        </div>
    );
}