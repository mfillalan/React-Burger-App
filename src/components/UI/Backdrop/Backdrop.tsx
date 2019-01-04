import * as React from "react";

require("./Backdrop.css");

interface IBackdropProps {
  show: boolean;
  clicked: () => void;
}

const backdrop = (props: IBackdropProps) =>
  props.show ? <div className="Backdrop" onClick={props.clicked} /> : null;

export default backdrop;
