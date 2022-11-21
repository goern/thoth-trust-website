import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import LoupeIcon from "@mui/icons-material/Loupe";

import { Link } from "@mui/material";

import { Artifact } from "./Artifact";

export interface ArtifactTableRowProps {
  artifact: Artifact;
}

const ArtifactTableRow = ({
  artifact: artifact,
  ...rest
}: ArtifactTableRowProps) => {
  return (
    <TableRow key={artifact.group_id + "." + artifact.artifact_id}>
      <TableCell component="th" scope="row">
        {artifact.group_id}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {artifact.artifact_id}
      </TableCell>
      <TableCell style={{ width: 80 }} align="right">
        {artifact.latest_version}
      </TableCell>
      <TableCell style={{ width: 40 }} align="right">
        <Link
          href={"/artifact/" + artifact.group_id + "/" + artifact.artifact_id}
        >
          <LoupeIcon />
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default ArtifactTableRow;
