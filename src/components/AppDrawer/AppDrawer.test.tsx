import {render, screen} from "@testing-library/react";
import {AppDrawer} from "./AppDrawer";
import userEvent from "@testing-library/user-event";

describe('<AppDrawer />', () => {

  const title = 'Irrelevant title'
  const navItems = [
    'First child',
    'Second child'
  ]

  it('should display nav items and title', () => {
    render(<AppDrawer
      open
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
    render(<AppDrawer
      open
      onMenuIconClick={onMenuIconClickMock}
      title={title}
      navItems={navItems}
    />)

    userEvent.click(screen.getByText(navItems[0]))

    expect(onMenuIconClickMock).toHaveBeenCalled()
  })

})