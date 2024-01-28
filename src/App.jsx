import { Box, Stack } from "@mui/material";
import "./App.css";
import Content from "./Content";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";

function App() {
  const [sidebarDisplay, setSidebarDisplay] = useState("block");
  const toggleSidebar = () => {
    if (sidebarDisplay === "none") {
      setSidebarDisplay("block");
    } else {
      setSidebarDisplay("none");
    }
  };
  return (
    <>
      <Box sx={{ height: "100vh", overflow: "hidden" }}>
        <Navbar toggleSidebar={() => toggleSidebar()} />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-start"
          // height="100%"
        >
          <Sidebar sidebarDisplay={sidebarDisplay} />
          <Content />
        </Stack>
      </Box>
    </>
  );
}

export default App;
