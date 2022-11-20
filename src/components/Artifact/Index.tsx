import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import ArtifactList from "./List";

export interface ArtifactIndexProps {}

const ArtifactIndex = ({ ...rest }: ArtifactIndexProps) => {
  return (
    <div>
      <h2>Index</h2>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="artifact name"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <p>
        <ArtifactList />
      </p>
    </div>
  );
};

ArtifactIndex.defaultProps = {};

export default ArtifactIndex;
