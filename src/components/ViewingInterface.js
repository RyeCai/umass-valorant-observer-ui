import React from "react";
import { useContext } from "react";
import { MatchContext } from "../App";

function ViewingInterface() {
  const match = useContext(MatchContext)[0];
  return (
    <div className="container">
      <div className="team-panel left-team">
        {match.leftTeamLogo && (
          <img
            className="team-logo"
            src={match.leftTeamLogo}
            alt="Left Team Logo"
          />
        )}
        <div>{match.leftTeamName}</div>
        <div>{match.leftTeamWins}</div>
      </div>
      <div className="team-panel right-team">
        <div>{match.rightTeamWins}</div>
        <div>{match.rightTeamName}</div>
        {match.leftTeamLogo && (
          <img
            className="team-logo"
            src={match.rightTeamLogo}
            alt="Right Team Logo"
          />
        )}
      </div>
    </div>
  );
}

export default ViewingInterface;
