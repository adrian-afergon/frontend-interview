import {render, screen} from "@testing-library/react";
import {AppContent} from "./AppContent";

describe('<AppContent />', () => {
  it('should display children', () => {
    const children = 'irrelevant'

    render(<AppContent>{children}</AppContent>)

    screen.getByText(children)
  });
});