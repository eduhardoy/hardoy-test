import React from "react";
import {screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import AstroInfo from "../components/AstroInfo";

beforeEach(() => render(<AstroInfo/>))

describe("AstroInfo", () => {
  test("Should Render AstroInfo Component", () => {
    const queries = render(<AstroInfo />);
    queries.debug();
    expect(true).toBe(true);
  });
});

describe("AstroInfo Active Button", () => {
  test("Should Render Retired Button Tex", () => {
    expect(screen.queryByText(/active/i)).toBeInTheDocument();
  });
});

describe("AstroInfo Retired Button", () => {
  test("Should Render Retired Button Text", () => {
    expect(screen.queryByText(/retired/i)).toBeInTheDocument();
  });
});
