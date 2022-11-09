import React from "react";

function ViewingInterface({ curMatch }) {
  return (
    <div className="container">
      <div className="team-panel left-team">
        <div>{curMatch.leftTeamName}</div>
        <div>{curMatch.leftTeamWins}</div>
      </div>
      <div className="team-panel right-team">
        <div>{curMatch.rightTeamWins}</div>
        <div>{curMatch.rightTeamName}</div>
      </div>
    </div>
  );
}

export default ViewingInterface;
