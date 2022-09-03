import React from "react";
import {AppContent} from "../AppContent";
import {AppResponsiveHeader} from "../AppResponsiveHeader";
import {Link} from "react-router-dom";
import styles from './Layout.module.css'

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({children}) => {
  const navItems = [
    <Link to={'/home'} className={styles.inherit}>Home</Link>,
    <Link to={'/dashboard'} className={styles.inherit}>Dashboard</Link>
  ]

  return (<>
    <AppResponsiveHeader
      title="App - UI"
      navItems={navItems}
    />
    <AppContent>{children}</AppContent>
  </>);
}