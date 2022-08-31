import { Box, Fab } from "@mui/material";
import React from "react";
import Copyright from "./Copyright";
import NavigationIcon from '@mui/icons-material/Navigation';
import NavAppBar from "./Navigation/AppBar";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Box sx={{ margin: 1 }} height="100vh">
      <NavAppBar />
      {children}
      {/* <Fab color="secondary">
        <NavigationIcon />
      </Fab> */}
      <Copyright />
    </Box>
  );
};
