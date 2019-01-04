export interface IIngredients {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
}

export interface ICustomer {
  address: {
    country: string;
    street: string;
    zipCode: string;
  };
  email: string;
  name: string;
}

export interface IOrders {
  id: string;
  customer: ICustomer;
  ingredients: IIngredients;
  price: number;
}
