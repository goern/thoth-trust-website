import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useLoaderData, useRouteError } from "react-router-dom";

import { Artifact } from "./Artifact";
import ArtifactList from "./List";
import { createArtifactListRow } from "./Utils";

export interface ArtifactIndexProps {}

export async function artifactIndexLoader(): Promise<Artifact[]> {
  return [
    createArtifactListRow("org.apache.logging.log4j", "log4j", "2.18.0"),
    createArtifactListRow("org.apache.logging.log4j", "log4j", "2.17.2"),
    createArtifactListRow("org.apache.logging.log4j", "log4j", "2.16.0"),
  ];
}

export function ArtifactIndexBoundary() {
  let error = useRouteError() as Error;
  return (
    <>
      <h2>Error 💥</h2>
      <p>{error.message}</p>
    </>
  );
}

export const ArtifactIndex = ({ ...rest }: ArtifactIndexProps) => {
  let artifacts = useLoaderData() as Artifact[];

  return (
    <div>
      <h2>Index</h2>
      <Paper component="form" sx={{ display: "flex", alignItems: "center" }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="artifact name"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper sx={{ display: "flex", alignItems: "center" }}>
        <ArtifactList rows={artifacts} />
      </Paper>
    </div>
  );
};

ArtifactIndex.defaultProps = {};
