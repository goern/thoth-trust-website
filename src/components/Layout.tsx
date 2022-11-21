import { Outlet, useFetchers, useNavigation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import NavLinkList from "./NavLinkList";

export function Layout() {
  let navigation = useNavigation();
  let fetchers = useFetchers();
  let fetcherInProgress = fetchers.some((f) =>
    ["loading", "submitting"].includes(f.state)
  );
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <h1>Thoth Trust Explorer</h1>
            </Typography>
            <NavLinkList />
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Outlet />
          <div style={{ position: "fixed", top: 0, right: 0 }}>
            {navigation.state !== "idle" && <p>Navigation in progress...</p>}
            {fetcherInProgress && <p>Fetcher in progress...</p>}
          </div>
        </Box>
      </Box>
    </>
  );
}
