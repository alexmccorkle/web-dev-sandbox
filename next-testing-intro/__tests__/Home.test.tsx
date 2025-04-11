import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should have docs text", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const myElem = screen.getByText(/docs/i);

    // ASSERT
    // Check if the element is in the document
    expect(myElem).toBeInTheDocument();
  });

  it("should contain the text 'Examples'", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const myElem = screen.getByText("Examples", { exact: false });

    // ASSERT
    // Check if the element is in the document
    expect(myElem).toBeInTheDocument();
  });

  it("should contain an main element", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const myElem = screen.getByRole("main", {
      name: "",
    });

    // ASSERT
    // Check if the element is in the document
    expect(myElem).toBeInTheDocument();
  });
});
