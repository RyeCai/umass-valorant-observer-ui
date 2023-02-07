import "./App.css";
import "./index.css";
import React, { useState, createContext } from "react";
import Customizer from "./components/Customizer";
import ViewingInterface from "./components/ViewingInterface";
import HelpDialog from "./components/HelpDialog";

const MatchContext = createContext();

function App() {
  const [match, setMatch] = useState({
    //bestOf
    currentBracket: "",
    currentMap: "",
    currentPicker: "none",
    nextPicker: "none",
    nextMap: "",
    leftTeamName: "Team 1",
    leftTeamWins: 0,
    leftTeamLogo: null,
    rightTeamName: "Team 2",
    rightTeamWins: 0,
    rightTeamLogo: null,
  });

  //Passed through React Context to other components so match details change
  const handleChange = (prop) => (event) => {
    setMatch({ ...match, [prop]: event.target.value });
  };

  return (
    <MatchContext.Provider value={[match, setMatch, handleChange]}>
      <ViewingInterface />
      <Customizer />
      <HelpDialog />
    </MatchContext.Provider>
  );
}

export default App;
export { MatchContext };
