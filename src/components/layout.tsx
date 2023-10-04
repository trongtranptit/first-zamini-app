import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { Box } from "zmp-ui";
import { Navigation } from "./navigation";
import HomePage from "../pages/index/index";

export const Layout: FC = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Box>
      <Navigation />
    </Box>
  );
};
