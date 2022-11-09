import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Container } from "@mui/system";

export default function Customizer() {
  const [curTab, setTab] = useState("1");

  const customTheme = createTheme({
    palette: {
      primary: {
        light: "#112233",
        main: "#eeeeee",
        dark: "#778899",
        contrastText: "#fff",
      },
      secondary: {
        light: "#f0e6e6",
        main: "#111111",
        dark: "#3c3c3c",
        contrastText: "#000",
      },
    },
  });

  function handleChange(event, newTab) {
    setTab(newTab);
  }
  return (
    <Container
      sx={{
        width: 1000,
        height: "85%",
        backgroundColor: "#111111",
        opacity: 0.9,
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <TabContext value={curTab}>
        <Tabs
          value={curTab}
          onChange={handleChange}
          centered
          variant="fullWidth"
          sx={{
            color: "white",
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#EEEEEE",
            },
          }}
        >
          <Tab sx={{ color: "white" }} label="Match" value="1" />
          <Tab sx={{ color: "white" }} label="Map" value="2" />
        </Tabs>

        <TabPanel value="1"></TabPanel>
        <TabPanel value="2"></TabPanel>
      </TabContext>
    </Container>
  );
}
