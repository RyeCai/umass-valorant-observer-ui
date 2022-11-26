import "./App.css";
import "./index.css";
import React, { useState, createContext } from "react";
import Customizer from "./components/Customizer";
import ViewingInterface from "./components/ViewingInterface";

const MatchContext = createContext();

function App() {
  const [match, setMatch] = useState({
    //bestOf
    //currentBracket: "",
    currentMap: "Ascent",
    nextMap: "Bind",
    leftTeamName: "Team 1",
    leftTeamWins: 0,
    //leftTeamLogo: "/valorant-logo.png",
    rightTeamName: "Team 2",
    rightTeamWins: 0,
    //rightTeamLogo: "../assets/UI/valorant-logo.png",
  });

  const handleChange = (prop) => (event) => {
    setMatch({ ...match, [prop]: event.target.value });
  };

  return (
    <MatchContext.Provider value={[match, setMatch, handleChange]}>
      <ViewingInterface />
      <Customizer />
    </MatchContext.Provider>
  );
}

export default App;
export { MatchContext };
