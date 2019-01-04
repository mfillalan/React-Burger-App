import * as React from "react";
import { IIngredients } from "../../interfaces.d";

require("./Order.css");

interface IOrderProps {
  key: string;
  ingredients: IIngredients;
  price: number;
}

const order = (props: IOrderProps) => {
  const ingredients = [];

  for (let ingName in props.ingredients) {
    ingredients.push({
      name: ingName,
      amount: props.ingredients[ingName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className="Order">
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
