import * as React from "react";

require("./Logo.css");

interface ILogoProps {
  height: string;
}

const logo = (props: ILogoProps) => (
  <div className="Logo" style={{ height: props.height }}>
    <img
      src="https://uploads.codesandbox.io/uploads/user/7fc89e78-693b-40ee-896b-345f757cb02c/uKxY-burger-logo.png"
      alt="Burger Logo"
    />
  </div>
);

export default logo;
