import "./App.css";
import "./index.css";
import React, { useState } from "react";
import Customizer from "./components/Customizer";
import ViewingInterface from "./components/ViewingInterface";

function App() {
  const [curMatch, setMatch] = useState({
    //bestOf
    //currentBracket: "",
    currentMap: "Ascent",
    nextMap: "Bind",
    leftTeamName: "Team 1",
    leftTeamWins: 0,
    rightTeamName: "Team 2",
    rightTeamWins: 0,
  });

  const handleChange = (prop) => (event) => {
    setMatch({ ...curMatch, [prop]: event.target.value });
  };

  return (
    <div>
      <ViewingInterface curMatch={curMatch} />
      <Customizer curMatch={curMatch} handleChange={handleChange} />
    </div>
  );
}

export default App;
