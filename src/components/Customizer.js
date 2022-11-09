import {
  Box,
  Stack,
  TextField,
  Checkbox,
  Select,
  Divider,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Container } from "@mui/system";
import MapSelector from "./MapSelector";
import Team from "./Team";

export default function Customizer({ curMatch, handleChange }) {
  return (
    <Stack
      sx={{ position: "fixed", bottom: "5%", margin: "auto", width: "100%" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={8}
    >
      <Team
        teamName={curMatch.leftTeamName}
        mapScore={curMatch.leftTeamWins}
        side="left"
        handleChange={handleChange}
      />
      {/* <Stack spacing={4}>
        <TextField label="Team Name" variant="outlined" />
        <TextField type="number" label="Map Wins" variant="outlined" />
      </Stack> */}
      <Stack spacing={4}>
        <MapSelector
          label="Current Map"
          nextMap={curMatch.currentMap}
          mapChange={handleChange("currentMap")}
        />
        <MapSelector
          label="Next Map"
          nextMap={curMatch.nextMap}
          mapChange={handleChange("nextMap")}
        />
      </Stack>
      <Team
        teamName={curMatch.rightTeamName}
        mapScore={curMatch.rightTeamWins}
        side="left"
        handleChange={handleChange}
      />
    </Stack>
  );
}
