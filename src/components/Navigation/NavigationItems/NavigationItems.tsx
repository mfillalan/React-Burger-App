import * as React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

require("./NavigationItems.css");

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact={true}>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders" exact={false}>
      Orders
    </NavigationItem>
  </ul>
);

export default navigationItems;
