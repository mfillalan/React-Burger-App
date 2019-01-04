import * as React from "react";

require("./BuildControl.css");

interface IBuildControlProps {
  key: string;
  label: string;
  added: () => void;
  removed: () => void;
  disabled: boolean;
}

const buildControl = (props: IBuildControlProps) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="Less" onClick={props.removed} disabled={props.disabled}>
      Less
    </button>
    <button className="More" onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
