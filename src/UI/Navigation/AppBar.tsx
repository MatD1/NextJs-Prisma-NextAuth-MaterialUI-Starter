//@ts-nocheck
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "../../Link";
import { Stack } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function NavAppBar(props: Props) {
  const { data: session, status } = useSession();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <Stack direction={"column"}>
        <Link href="/">
          <Button
            sx={{
              textAlign: "center",
              borderColor: "whitesmoke",
              borderWidth: 1,
              borderStyle: "solid",
              margin: 2,
              borderRadius: 3,
            }}
          >
            Home
          </Button>
        </Link>

        {status === "authenticated" ? (
          <Button
            onClick={() => signOut()}
            sx={{
              textAlign: "center",
              borderColor: "whitesmoke",
              borderWidth: 1,
              borderStyle: "solid",
              margin: 2,
              borderRadius: 3,
            }}
          >
            Log-out
          </Button>
        ) : (
          <Button
            onClick={() => signIn()}
            sx={{
              textAlign: "center",
              borderColor: "whitesmoke",
              borderWidth: 1,
              borderStyle: "solid",
              margin: 2,
              borderRadius: 3,
            }}
          >
            Login
          </Button>
        )}
      </Stack>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: 15 }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            EFTTools
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href="/">
              <Button
                variant="outlined"
                color={"secondary"}
                sx={{ paddingLeft: 5, paddingRight: 5, margin: 1 }}
              >
                Home
              </Button>
            </Link>
            {status === "unauthenticated" ? (
              <Button
                variant="outlined"
                color={"secondary"}
                onClick={() => signOut()}
                sx={{ paddingLeft: 5, paddingRight: 5, margin: 1 }}
              >
                Login
              </Button>
            ) : (
              <Button
                variant="outlined"
                color={"secondary"}
                onClick={() => signIn()}
                sx={{ paddingLeft: 5, paddingRight: 5, margin: 1 }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
