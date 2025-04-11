import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it('Should render the "Next Todos" heading', () => {
    // arrange
    render(<Header title="Next Todos" />);

    //act
    const header = screen.getByRole("heading", {
      name: "Next Todos",
    });

    // assert
    expect(header).toBeInTheDocument();
  });
});
