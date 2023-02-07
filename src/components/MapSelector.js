import React, { useEffect, useContext, useState } from "react";
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
import { MatchContext } from "../App";

// Props: map selector label, map value from match context, and the handleChange function for the "match" object
export default function MapSelector(props) {
  const [match, setMatch, handleChange] = useContext(MatchContext);
  const [valMaps, setValMaps] = useState([]);
  //const [selected, setSelected] = useState("none");
  const curSelector = props.label === "Current Map" ? "current" : "next";

  const handleToggleChange = (prop) => (event) => {
    setMatch((prevSelected) => {
      const targetVal = !event.target.value
        ? event.target.getAttribute("value")
        : event.target.value;
      const newSelection =
        targetVal === "none" || prevSelected[prop] !== targetVal
          ? targetVal
          : "none";

      return { ...match, [prop]: newSelection };
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
        selected={match[`${curSelector}Picker`] === "left"}
        onChange={handleToggleChange(`${curSelector}Picker`)}
      >
        <KeyboardArrowLeftIcon value="left" />
      </ToggleButton>
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={match[`${curSelector}Map`]}
          label={props.label}
          autoWidth
          onChange={handleChange(`${curSelector}Map`)}
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
        selected={match[`${curSelector}Picker`] === "right"}
        onChange={handleToggleChange(`${curSelector}Picker`)}
      >
        <KeyboardArrowRightIcon value="right" />
      </ToggleButton>
    </Stack>
  );
}
