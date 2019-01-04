import * as React from "react";

require("./Button.css");

interface IButtonProps {
  children: React.ReactNode;
  clicked: (defaultValue: any) => void;
  btnType: string;
  disabled: boolean;
}

const button = (props: IButtonProps) => (
  <button
    className={["Button", props.btnType].join(" ")}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default button;
