import React from "react"

function Header() {
    return (
        <header className="header">
            <div className="name-logo">
                <img className="app-logo" src={require("../assets/agents/Cypher/abilities/Ability2.png")}/>
                <div className="app-name">VALORANT Map Score Interface</div>
            </div>
            <img className="github-logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
        </header>
    )
}

export default Header