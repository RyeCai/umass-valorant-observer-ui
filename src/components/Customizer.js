import React, { useContext } from "react";
import { Stack, Divider, TextField, Card } from "@mui/material";
import MapSelector from "./MapSelector";
import Team from "./Team";
import { MatchContext } from "../App";

export default function Customizer() {
  const match = useContext(MatchContext)[0];
  const handleChange = useContext(MatchContext)[2];
  //const [curTab, setTab] = useState(0);

  return (
    <Card
      sx={{
        position: "fixed",
        bottom: "5%",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        width: "60%",
      }}
      style={{ padding: 25 }}

      // onKeyDown={handleTab}
      // className={`${hidden ? "hidden" : "not-hidden"}`}
    >
      <Stack
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
          <MapSelector label="Current Map" />
          <MapSelector label="Next Map" />
          <TextField
            label="Current Bracket"
            variant="outlined"
            value={match.currentBracket}
            onChange={handleChange("currentBracket")}
          />
        </Stack>
        <Team
          teamName={match.rightTeamName}
          mapScore={match.rightTeamWins}
          side="right"
          handleChange={handleChange}
        />
      </Stack>
    </Card>
  );
}
