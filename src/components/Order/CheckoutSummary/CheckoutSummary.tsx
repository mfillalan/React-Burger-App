import * as React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

require("./CheckoutSummary.css");

interface IIngredients {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
}

interface ICheckoutSummaryProps {
  ingredients: IIngredients;
  checkoutCancelled: () => void;
  checkoutContinued: () => void;
}

const checkoutSummary = (props: ICheckoutSummaryProps) => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
