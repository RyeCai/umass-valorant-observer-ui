import { useContext } from "react";
import { Stack, Divider } from "@mui/material";
import MapSelector from "./MapSelector";
import Team from "./Team";
import { MatchContext } from "../App";

export default function Customizer() {
  const match = useContext(MatchContext)[0];
  const handleChange = useContext(MatchContext)[2];
  return (
    <Stack
      sx={{ position: "fixed", bottom: "5%", margin: "auto", width: "100%" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={8}
    >
      <Team side="left" />
      {/* <Stack spacing={4}>
        <TextField label="Team Name" variant="outlined" />
        <TextField type="number" label="Map Wins" variant="outlined" />
      </Stack> */}
      <Stack spacing={4}>
        <MapSelector
          label="Current Map"
          nextMap={match.currentMap}
          mapChange={handleChange("currentMap")}
        />
        <MapSelector
          label="Next Map"
          nextMap={match.nextMap}
          mapChange={handleChange("nextMap")}
        />
      </Stack>
      <Team
        teamName={match.rightTeamName}
        mapScore={match.rightTeamWins}
        side="right"
        handleChange={handleChange}
      />
    </Stack>
  );
}
