import * as React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

require("./OrderSummary.css");

interface IIngredients {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
}

interface IOrderSummaryProps {
  ingredients: IIngredients;
  purchaseCanceled: () => void;
  purchaseContinue: () => void;
  price: number;
}

class OrderSummary extends React.Component<IOrderSummaryProps> {
  componentWillUpdate() {
    //console.log("Order Summary will update.");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
