import * as React from "react";

import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const ArtifactIndex = React.lazy(() => import("./Artifact/Index"));
const Loading = () => <p>Loading ...</p>;

const Main = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artifacts" element={<ArtifactIndex />} />
      </Routes>
    </React.Suspense>
  );
};

export default Main;
