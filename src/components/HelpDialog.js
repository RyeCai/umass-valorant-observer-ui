import React, { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import {
  Button,
  Typography,
  List,
  ListItem,
  Dialog,
  DialogTitle,
} from "@mui/material";

function DialogBox({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>OBS Instructions</DialogTitle>
      <List>
        <ListItem>
          <Typography>
            1. Add this website's link as a browser source in OBS, enter in your
            desired broadcast resolution i.e 1920x1080, and then press OK
          </Typography>
          {/* <img src="./window-size"></img> */}
        </ListItem>

        <ListItem>
          <Typography>
            2. Right-Click the Browser Source, click <b>Interact</b>, and change
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

export default function HelpDialog() {
  const [helpOpen, setHelpOpen] = useState(false);

  const handleHelp = () => {
    setHelpOpen(!helpOpen);
  };
  return (
    <div style={{ position: "fixed", bottom: 0, right: 0 }}>
      <Button onClick={handleHelp}>
        <HelpIcon />
      </Button>
      <DialogBox open={helpOpen} handleClose={handleHelp} />
    </div>
  );
}
