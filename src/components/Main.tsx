import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const ArtifactIndex = React.lazy(() => import("./Artifact/Index"));
const ArtifactDetails = React.lazy(() => import("./Artifact/Details"));
const Loading = () => <Skeleton />;

const Main = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artifacts" element={<ArtifactIndex />} />
        <Route path="/artifact/:org/:artifact" element={<ArtifactDetails />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </React.Suspense>
  );
};

export default Main;
