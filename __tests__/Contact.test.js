import React from "react";
import {render, screen } from "@testing-library/react";
// import { renderHook } from "@testing-library/react-hooks";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Contact page should render with a heading", () => {
  render(<Contact />);
  const heading = screen.getByText("Contact"); 
  expect(heading).toBeInTheDocument();
   
});

