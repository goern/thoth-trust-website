import Box from "@mui/material/Box";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export function NavLinkList() {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <NavLink to="/">
        <Button key="home" sx={{ color: "#fff" }}>
          Home
        </Button>
      </NavLink>
      <NavLink to="/artifacts">
        <Tooltip title="search the index of known packages">
          <Button key="home" sx={{ color: "#fff" }}>
            Artifacts
          </Button>
        </Tooltip>
      </NavLink>
      <NavLink to="/about">
        <Button key="home" sx={{ color: "#fff" }}>
          About
        </Button>
      </NavLink>
    </Box>
  );
}

export default NavLinkList;
