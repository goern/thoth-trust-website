import ArtifactList from "./List";

export interface ArtifactIndexProps {}

const ArtifactIndex = ({ ...rest }: ArtifactIndexProps) => {
  return (
    <div>
      <h2>Artifact List</h2>
      <p>
        <ArtifactList />
      </p>
    </div>
  );
};

ArtifactIndex.defaultProps = {};

export default ArtifactIndex;
