import React from "react";
import { useEffect, useState } from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";

function MapSelector(props) {
  const [valMaps, setValMaps] = useState([]);
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
  );
}

export default MapSelector;
