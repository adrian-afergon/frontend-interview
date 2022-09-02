import {render, screen} from "@testing-library/react";
import {Loader} from "./Loader";

describe('<Loader />', () => {
  it('should mark the application has busy', () => {
    const screen = render(<Loader />)

    expect(screen.container.querySelector("[aria-busy]")).toBeInTheDocument()
  });
});