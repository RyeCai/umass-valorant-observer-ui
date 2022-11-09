import React, { useState } from "react";
import { Stack, Tabs, Tab, Paper, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Container } from "@mui/system";
import Match from "./Match";
import ViewingInterface from "./ViewingInterface";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Customizer() {
  const [curTab, setTab] = useState("1");
  const [match, setMatch] = useState({ bestOf: 3, currentBracket: "" });

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

  function handleSubmit() {}
  return (
    <Stack sx={{ width: 1000, height: "85%", margin: "auto" }}>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#111111",
          opacity: 0.9,
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
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

          <TabPanel value="1">
            <Match />
          </TabPanel>
          <TabPanel value="2"></TabPanel>
        </TabContext>
      </Paper>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/interface"
            component={<ViewingInterface />}
          ></Route>
        </Routes>
        <Link to="/interface" target="_blank">
          <Button
            sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            variant="contained"
            size="large"
          >
            Create Interface
          </Button>
        </Link>
      </BrowserRouter>
    </Stack>
  );
}
