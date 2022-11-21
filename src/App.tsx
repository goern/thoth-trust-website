import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home, homeLoader } from "./components/Home";
import {
  ArtifactIndex,
  artifactIndexLoader,
  ArtifactIndexBoundary,
} from "./components/Artifact/Index";
import {
  Details as ArtifactDetails,
  DetailsBoundary as ArtifactDetailsBoundary,
  detailsLoader,
} from "./components/Artifact/Details";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index loader={homeLoader} element={<Home />} />
      <Route
        path="artifacts"
        loader={artifactIndexLoader}
        element={<ArtifactIndex />}
        errorElement={<ArtifactIndexBoundary />}
      />
      <Route
        path="artifact/:group_id/:artifact_id"
        loader={detailsLoader}
        element={<ArtifactDetails />}
        errorElement={<ArtifactDetailsBoundary />}
      />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
