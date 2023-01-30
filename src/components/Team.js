import React, { useContext } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { MatchContext } from "../App";

function Team({ side }) {
  const [match, setMatch, handleChange] = useContext(MatchContext);
  const handleLogoChange = (event) => {
    setMatch({
      ...match,
      [`${side}TeamLogo`]: URL.createObjectURL(event.target.files[0]),
    });
  };
  return (
    <Stack spacing={4}>
      <TextField
        label="Team Name"
        variant="outlined"
        value={match[`${side}TeamName`]}
        onChange={handleChange(`${side}TeamName`)}
      />
      <TextField
        type="number"
        label="Map Wins"
        variant="outlined"
        value={match[`${side}TeamWins`]}
        onChange={handleChange(`${side}TeamWins`)}
      />
      <Button variant="contained" component="label">
        Upload Team Logo
        <input
          hidden
          accept="image/*"
          type="file"
          onChange={handleLogoChange}
        />
      </Button>
    </Stack>
  );
}

export default Team;
