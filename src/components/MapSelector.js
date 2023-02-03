import React from "react";
import { useEffect, useState } from "react";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Stack,
  ToggleButton,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function MapSelector(props) {
  const [valMaps, setValMaps] = useState([]);
  const [selected, setSelected] = useState("none");

  const handleChange = (event) => {
    setSelected((prevSelected) => {
      let targetVal = !event.target.value
        ? event.target.getAttribute("value")
        : event.target.value;

      return targetVal === "none" || prevSelected !== targetVal
        ? targetVal
        : "none";
    });
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://valorant-api.com/v1/maps");
      if (!res.ok) {
        console.log(res.statusText);
        setValMaps([
          "Ascent",
          "Bind",
          "Breeze",
          "Fracture",
          "Haven",
          "Icebox",
          "Lotus",
          "Pearl",
          "Split",
        ]);
        return;
      }
      let newMaps = await res.json();
      newMaps = newMaps.data.reduce((maps, curMap) => {
        if (curMap.displayName !== "The Range") maps.push(curMap.displayName);
        return maps;
      }, []);
      newMaps.sort();
      setValMaps(newMaps);
    }

    fetchData();
    return;
  }, []);

  return (
    <Stack direction="row">
      <ToggleButton
        value="left"
        selected={selected === "left"}
        onChange={handleChange}
      >
        <KeyboardArrowLeftIcon onChange={handleChange} value="left" />
      </ToggleButton>
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={props.map}
          label={props.label}
          autoWidth
          onChange={props.mapChange}
        >
          <MenuItem value="">None</MenuItem>
          {valMaps.map((valMap) => (
            <MenuItem key={valMap} value={valMap}>
              {valMap}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ToggleButton
        value="right"
        selected={selected === "right"}
        onChange={handleChange}
      >
        <KeyboardArrowRightIcon value="right" />
      </ToggleButton>
    </Stack>
  );
}

export default MapSelector;
