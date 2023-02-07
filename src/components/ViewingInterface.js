import React, { useContext } from "react";
import { MatchContext } from "../App";
import valLogo from "../assets/UI/valorant-logo.png";

function ViewingInterface() {
  const match = useContext(MatchContext)[0];

  const defaultTeam2 = {
    background: "linear-gradient(purple, purple)",
    marginRight: "5%",
    borderRadius: ".5vw",
  };
  return (
    <div className="container">
      <div className="team-panel left-team">
        <img
          className="team-logo"
          src={match.leftTeamLogo ? match.leftTeamLogo : valLogo}
          alt=""
        />

        <div className="team-name">{match.leftTeamName}</div>
        <div>{match.leftTeamWins}</div>
      </div>
      <div className="middle-container">
        <div className="maps">
          {match.currentMap !== "" && (
            <div className="map-info current-map">
              {match.currentPicker !== "none" && (
                <img
                  src={
                    match[`${match.currentPicker}Logo`]
                      ? match[`${match.currentPicker}Logo`]
                      : valLogo
                  }
                  className="map-pick-logo"
                  style={
                    match.currentPicker === "right"
                      ? defaultTeam2
                      : { marginRight: "5%" }
                  }
                  alt=""
                />
              )}
              <div>Current: {match.currentMap}</div>
            </div>
          )}
          {match.nextMap !== "" && (
            <div className="map-info next-map">
              {match.nextPicker !== "none" && (
                <img
                  src={
                    match[`${match.nextPicker}Logo`]
                      ? match[`${match.nextPicker}Logo`]
                      : valLogo
                  }
                  className="map-pick-logo"
                  style={
                    match.nextPicker === "right"
                      ? defaultTeam2
                      : { marginRight: "5%" }
                  }
                  alt=""
                />
              )}
              <div>Next: {match.nextMap}</div>
            </div>
          )}
        </div>
        {match.currentBracket !== "" && (
          <div className="bracket">{match.currentBracket}</div>
        )}
      </div>
      <div className="team-panel right-team">
        <div>{match.rightTeamWins}</div>
        <div className="team-name">{match.rightTeamName}</div>
        <img
          className="team-logo"
          src={match.rightTeamLogo ? match.rightTeamLogo : valLogo}
          alt=""
          style={match.rightTeamLogo ? {} : defaultTeam2}
        />
      </div>
    </div>
  );
}

export default ViewingInterface;
