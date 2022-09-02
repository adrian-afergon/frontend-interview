import React, {ReactNode} from "react";
import {AppHeader} from "../AppHeader";
import {AppDrawer} from "../AppDrawer";

type Props = {
  title: string
  navItems: ReactNode[]
}

export const AppResponsiveHeader: React.FC<Props> = ({title, navItems}) => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleMenuIconClick = () => {
    setMobileOpen(!mobileOpen)
  }
  return (<>
    <AppHeader title={title} navItems={navItems} onMenuIconClick={handleMenuIconClick}/>
    <AppDrawer title={title} navItems={navItems} open={mobileOpen} onMenuIconClick={handleMenuIconClick}/>
  </>)


}