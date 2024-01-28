import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Content = ({}) => {
  const WhiteTypography = styled(Typography)({
    color: "white",
  });
  return (
    <Stack sx={{ maxHeight: "100vh", overflow: "auto" }}>
      <WhiteTypography variant="h2">Introduction</WhiteTypography>
      <WhiteTypography>
        Welcome to the Advanced Blood Death Knight Guide for M+ in Patch 10.2.5!
        The purpose of this guide is to provide accurate, in-depth BDK
        information specifically geared towards players progressing in M+. All
        information provided herein is based on a combination of M+ log data
        analysis, simulationcraft analysis, BDK mitigation model analysis,
        in-game testing, and expert opinion. While this guide was primarily made
        with +18 and higher key levels in mind, the recommendations
        (particularly those concerned with playstyle) can also be used for
        success in key levels below this point, though a small number of
        optimization recommendations may be different if particularly low gear
        level, poor ability usage, or low key levels were taken into
        consideration. It is a comprehensive guide that gives readers a chance
        to understand not only *what* decisions can improve their play, but
        *why* these decisions are made, so feel free to skip to whatever
        sections are relevant for you (a navigation tool is available on the
        left)!{" "}
        <a href="https://www.wowhead.com/spell=43265/death-and-decay">TEST</a>
      </WhiteTypography>
    </Stack>
  );
};

export default Content;
