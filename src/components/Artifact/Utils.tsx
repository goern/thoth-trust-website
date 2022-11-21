import { ArtifactDetails } from "./Details";

export function createArtifactListRow(
  group_id: string,
  artifact_id: string,
  latest_version: string
) {
  return {
    group_id: group_id,
    artifact_id: artifact_id,
    latest_version: latest_version,
  };
}

export function createArtifactDetails(): ArtifactDetails {
  return {
    group_id: "org.apache.logging.log4j",
    artifact_id: "log4j",
    latest_version: "2.19.0",
    available_versions: [
      "2.19.0",
      "2.18.0",
      "2.17.0",
      "2.17.1",
      "2.17.2",
      "2.16.0",
    ],
    description:
      "Apache Log4j 2 is an upgrade to Log4j that provides significant improvements over its predecessor, Log4j 1.x, and provides many of the improvements available in Logback while fixing some inherent problems in Logback's architecture.",
    scm_url: "https://gitbox.apache.org/repos/asf?p=logging-log4j2.git",
    scm_stars: -1, // this is not applicable to apache projects
  };
}
