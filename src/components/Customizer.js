import React, { useContext, useState } from "react";
import {
  Stack,
  Divider,
  TextField,
  Card,
  CardHeader,
  Button,
  Tooltip,
  Typography,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import MapSelector from "./MapSelector";
import Team from "./Team";
import { MatchContext } from "../App";

export default function Customizer() {
  const match = useContext(MatchContext)[0];
  const handleChange = useContext(MatchContext)[2];
  const [hidden, setHidden] = useState(false);

  const handleTab = (event) => {
    if (event.shiftKey && event.key === "Tab") setHidden(!hidden);
  };

  const handleHidden = () => {
    setHidden(!hidden);
  };

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
      style={{ padding: 25, paddingTop: 0 }}
      justifyContent="center"
      alignItems="center"
      onKeyUp={handleTab}
      className={`${hidden ? "hidden" : "not-hidden"}`}
    >
      <CardHeader
        title={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Tooltip title="Press Shift+Tab to Hide/Unhide settings menu">
              <Button onClick={handleHidden}>Hide</Button>
            </Tooltip>
            <Tooltip
              title={
                <React.Fragment style={{ padding: 10 }}>
                  <Typography>Instructions:</Typography>
                  <ol>
                    <li>
                      {
                        "Add this website as a browser source in OBS, and enter in your desired broadcast resolution."
                      }
                    </li>
                    <li>
                      {"Delete all of the text in the "}
                      <b>{"Custom CSS"}</b> {"section, and then press OK."}
                    </li>{" "}
                    <li>
                      {"Right-Click the Browser Source and press "}
                      <b>{"Interact"}</b> {", and change settings as desired."}
                    </li>{" "}
                    <li>
                      {
                        "The settings menu can be hidden from view by pressing the "
                      }{" "}
                      <b>{"HIDE"}</b> {" button or pressing "}{" "}
                      <b>{"SHIFT+TAB."}</b>
                    </li>
                  </ol>
                </React.Fragment>
              }
            >
              <HelpIcon />
            </Tooltip>
          </div>
        }
      />
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
          <MapSelector
            label="Current Map"
            map={match.currentMap}
            mapChange={handleChange("currentMap")}
          />
          <MapSelector
            label="Next Map"
            map={match.nextMap}
            mapChange={handleChange("nextMap")}
          />
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
