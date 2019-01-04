import * as React from "react";
import { History } from "history";
import { Route, RouteComponentProps } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

interface IIngredients {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
}

interface ICheckoutProps extends RouteComponentProps<any> {
  history: History;
}

interface ICheckoutState {
  ingredients: IIngredients;
  totalPrice: number;
}

class Checkout extends React.Component<ICheckoutProps, ICheckoutState> {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
    totalPrice: 0
  };

  componentDidMount() {
    /* URLSearchParams isn't returning anything
    console.log(this.props.history.location.search);
    const query = new URLSearchParams(this.props.history.location.search);
    console.log(query);
    const ingredients = {} as IIngredients;
    for (let param of query.entries()) {
      console.log("Test");
      console.log(param[0]);
      console.log(param[1]);
      ingredients[param[0]] = +param[1];
    }
    console.log(ingredients);
    */
    let ingredients = this.props.history.location.state.ingredients;
    let price = this.props.history.location.state.price;
    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
