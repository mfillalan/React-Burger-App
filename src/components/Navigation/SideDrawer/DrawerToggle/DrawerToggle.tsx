import * as React from "react";

require("./DrawerToggle.css");

interface IDrawerToggleProps {
  clicked: () => void;
}

const drawerToggle = (props: IDrawerToggleProps) => (
  <div className="DrawerToggle" onClick={props.clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default drawerToggle;
