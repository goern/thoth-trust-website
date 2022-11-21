import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Home page", () => {
  render(<App />);
  const artifactsLinkElement = screen.getByText(/artifacts/i);

  expect(artifactsLinkElement).toBeInTheDocument();
});
