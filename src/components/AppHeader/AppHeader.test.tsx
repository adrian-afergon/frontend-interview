import {render, screen} from "@testing-library/react";
import {AppHeader} from "./AppHeader";
import userEvent from "@testing-library/user-event";

describe('<AppHeader />', () => {

  const title = 'Irrelevant title'
  const navItems = [
    'First child',
    'Second child'
  ]

  it('should display nav items and title', () => {
    render(<AppHeader
      onMenuIconClick={jest.fn}
      title={title}
      navItems={navItems}
    />)

    screen.getByText(title)
    screen.getByText(navItems[0])
    screen.getByText(navItems[1])
  })

  it('should trigger event when user clicks inside drawer', () => {
    const onMenuIconClickMock = jest.fn()
    render(<AppHeader
      onMenuIconClick={onMenuIconClickMock}
      title={title}
      navItems={navItems}
    />)

    userEvent.click(screen.getByLabelText('menu'))

    expect(onMenuIconClickMock).toHaveBeenCalled()
  })

})