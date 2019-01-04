import * as React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

interface IErrorHandlerProps {}

interface IErrorHandlerState {
  error: any;
}

const withErrorHandler = (WrappedComponent: any, axios: any) => {
  return class extends React.Component<IErrorHandlerProps, IErrorHandlerState> {
    state = {
      error: null
    };

    reqInterceptor: any = null;
    resInterceptor: any = null;

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req: any) => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(
        (res: any) => res,
        (error: any) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      //console.log("Will Unmount", this.reqInterceptor, this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
