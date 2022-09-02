import {Layout} from "./Layout";
import {BrowserRouter} from "react-router-dom";
import {render, screen} from "@testing-library/react";

describe('<Layout />', () => {

  it('should display children', () => {
    render(
      <BrowserRouter>
        <Layout>Irrelevant</Layout>
      </BrowserRouter>
    )
    screen.getByText('Irrelevant')
  })

})