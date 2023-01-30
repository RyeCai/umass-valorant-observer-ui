import React, { useContext, useState } from "react";
import {
  Stack,
  Divider,
  TextField,
  Card,
  Typography,
  Dialog,
  DialogTitle,
  List,
  ListItem,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import MapSelector from "./MapSelector";
import Team from "./Team";
import { MatchContext } from "../App";

function HelpDialog({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>OBS Instructions</DialogTitle>
      <List>
        <ListItem>
          <Typography>
            1. Add this website's link as a browser source in OBS, and enter in
            your desired broadcast resolution i.e 1920x1080.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            2. Delete all of the text in the <b>Custom CSS section</b>, and then
            press OK.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            3. Right-Click the Browser Source, click <b>Interact</b>, and change
            settings as desired.
          </Typography>
        </ListItem>
        {/* <ListItem>
          <Typography>
            4. The settings menu can be hidden from view by pressing the{" "}
            <b>HIDE</b> button or pressing <b>SHIFT+TAB</b> at the same time.
          </Typography>
        </ListItem> */}
      </List>
    </Dialog>
  );
}

export default function Customizer() {
  const match = useContext(MatchContext)[0];
  const handleChange = useContext(MatchContext)[2];
  //const [hidden, setHidden] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  // const handleTab = (event) => {
  //   if (event.shiftKey && event.key === "Tab") setHidden(!hidden);
  // };

  // const handleHidden = () => {
  //   setHidden(!hidden);
  // };

  const handleHelp = () => {
    setHelpOpen(!helpOpen);
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
