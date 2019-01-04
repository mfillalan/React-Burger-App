import * as React from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const styles = {
  marginTop: "72px"
};

interface ILayoutProps {
  children: React.ReactNode;
}

interface ILayoutState {
  showSideDrawer: boolean;
}

class Layout extends React.Component<ILayoutProps, ILayoutState> {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main style={styles}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
