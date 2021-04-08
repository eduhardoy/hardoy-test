import React from "react";
import { render } from "@testing-library/react";
import AstroInfo from "../components/AstroInfo";
import Header from "../components/Header";

describe("AstroInfo", () => {
  test("Should Render AstroInfo Component", () => {
    const queries = render(<AstroInfo />);
    queries.debug();
    expect(true).toBe(true);
  });
});

describe("Header", () => {
  test("Should Render Header Component", () => {
    const queries = render(<Header />);
    queries.debug();
    expect(true).toBe(true);
  });
});
