import React from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";

function MapSelector(props) {
  const valMaps = [
    "Ascent",
    "Bind",
    "Breeze",
    "Fracture",
    "Haven",
    "Icebox",
    "Pearl",
    "Split",
  ].map((valMap) => <MenuItem value={valMap}>{valMap}</MenuItem>);
  return (
    <FormControl sx={{ minWidth: 180 }}>
      <InputLabel>{props.label}</InputLabel>
      <Select
        value={props.nextMap}
        label={props.label}
        autoWidth
        onChange={props.mapChange}
      >
        {valMaps}
      </Select>
    </FormControl>
  );
}

export default MapSelector;
