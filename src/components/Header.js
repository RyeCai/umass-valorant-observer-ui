import React from "react";

function Header() {
  return (
    <header className="header">
      <img
        className="app-logo"
        src={require("../assets/agents/Cypher/abilities/Ability2.png")}
      />
      <div className="app-name">VALORANT Map Score Interface</div>
    </header>
  );
}

export default Header;
