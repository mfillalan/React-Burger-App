import * as React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

require("./Toolbar.css");

interface IToolbarProps {
  drawerToggleClicked: () => void;
}

const toolbar = (props: IToolbarProps) => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />

    <Logo height="80%" />

    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
