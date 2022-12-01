import React from "react";
import { useContext } from "react";
import { MatchContext } from "../App";

function ViewingInterface() {
  const match = useContext(MatchContext)[0];
  return (
    <div className="container">
      <div className="team-panel left-team">
        {match.leftTeamLogo && (
          <img className="team-logo" src={match.leftTeamLogo} alt="" />
        )}
        <div className="team-name">{match.leftTeamName}</div>
        <div>{match.leftTeamWins}</div>
      </div>
      <div className="middle-container">
        <div className="maps">
          {match.currentMap != "" && (
            <div className="map-info current-map">
              Current Map: {match.currentMap}
            </div>
          )}
          {match.nextMap != "" && (
            <div className="map-info next-map">Next Map: {match.nextMap}</div>
          )}
        </div>
        <div className="bracket"></div>
      </div>
      <div className="team-panel right-team">
        <div>{match.rightTeamWins}</div>
        <div className="team-name">{match.rightTeamName}</div>
        {match.leftTeamLogo && (
          <img className="team-logo" src={match.rightTeamLogo} alt="" />
        )}
      </div>
    </div>
  );
}

export default ViewingInterface;
