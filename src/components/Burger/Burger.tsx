import * as React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

require("./Burger.css");

interface IBurgerProps {
  ingredients: {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
  };
}

const burger = (props: IBurgerProps) => {
  /* TODO: Doesn't seem to work in typescript, research later...
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    console.log(igKey);
    console.log(props.ingredients[igKey]);
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      console.log("Test"); //never runs
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  console.log(transformedIngredients);
  */

  let listArray = [];
  for (let keyName in props.ingredients) {
    for (let i = 0; i < props.ingredients[keyName]; i++) {
      listArray.push(<BurgerIngredient key={keyName + i} type={keyName} />);
    }
  }

  if (listArray.length === 0) {
    listArray.push(<p key="add_ing_plz">Please add ingredients!</p>);
  }

  return (
    <div className="Burger">
      <BurgerIngredient key="bread-top" type="bread-top" />
      {listArray}
      <BurgerIngredient key="bread-bottom" type="bread-bottom" />
    </div>
  );
};

export default burger;
