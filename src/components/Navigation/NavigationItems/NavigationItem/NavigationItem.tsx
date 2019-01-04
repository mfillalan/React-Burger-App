import * as React from "react";
import { NavLink } from "react-router-dom";

require("./NavigationItem.css");

interface INavigationItemProps {
  children: React.ReactNode;
  link: string;
  exact: boolean;
}

const navigationItem = (props: INavigationItemProps) => (
  <li className="NavigationItem">
    <NavLink exact={props.exact} to={props.link} activeClassName={"active"}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
