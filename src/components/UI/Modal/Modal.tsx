import * as React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

require("./Modal.css");

interface IModalProps {
  show: boolean;
  children: React.ReactNode;
  modalClosed: () => void;
}

interface IModalState {}

class Modal extends React.Component<IModalProps, IModalState> {
  shouldComponentUpdate(nextProps: IModalProps, nextState: IModalState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate() {
    //console.log("Modal will update");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
