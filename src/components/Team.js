import React from "react";
import { TextField, FormControl, InputLabel, Stack } from "@mui/material";

function Team(props) {
  return (
    <Stack spacing={4}>
      <TextField
        label="Team Name"
        variant="outlined"
        value={props.teamName}
        onChange={props.handleChange(`${props.side}TeamName`)}
      />
      <TextField
        type="number"
        label="Map Wins"
        variant="outlined"
        value={props.mapScore}
        onChange={props.handleChange(`${props.side}TeamWins`)}
      />
    </Stack>
  );
}

export default Team;
