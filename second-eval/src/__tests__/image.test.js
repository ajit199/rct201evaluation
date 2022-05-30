import { render, screen } from "@testing-library/react";
import { Image } from "../Components/Image";

describe("This test cases are for image component", () => {
  test("component should have alt", function () {
    render(<Image />);
    let img = screen.get;
    expect(img).toBeInTheComponent();
  });
});
