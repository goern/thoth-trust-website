import { useLoaderData, useRouteError, useParams } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";

import { createArtifactDetails } from "./Utils";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export interface ArtifactDetails {
  group_id: string;
  artifact_id: string;
  latest_version: string;
  available_versions: string[];
  description: string;
  scm_url: string;
  scm_stars: number;
}

export function Details() {
  let params = useParams();
  let details = useLoaderData() as ArtifactDetails;

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h3">
            {details.group_id}.{details.artifact_id} &nbsp;
            {details.latest_version}
          </Typography>
          <Typography variant="body2" component="p">
            {details.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export async function detailsLoader({
  params,
}: LoaderFunctionArgs): Promise<ArtifactDetails> {
  if (!params.group_id || !params.artifact_id) {
    throw new Error("Expected params.group_id and params.artifact_id");
  }
  return createArtifactDetails();
}

export function DetailsBoundary() {
  let error = useRouteError() as Error;
  return (
    <>
      <h2>Error 💥</h2>
      <p>{error.message}</p>
    </>
  );
}
