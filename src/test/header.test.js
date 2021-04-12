import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

beforeEach(() => render(<Header />));

describe("Header", () => {
  test("Should Render Header Component", () => {
    const queries = render(<Header />);
    queries.debug();
    expect(true).toBe(true);
  });
});

describe("Header Title", () => {
  test("Should Render Header Title", () => {
    expect(screen.queryByText(/ASTRONAUTS/i)).toBeInTheDocument();
  });
});
