import * as React from "react";
import axios from "../../../axios-orders";
import { History } from "history";
import { IIngredients } from "../../../interfaces.d";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

require("./ContactData.css");

interface IInputData {
  elementType: string;
  elementConfig: {
    type: string;
    placeholder: string;
  };
  value: string;
}

interface IOptions {
  value: string;
  displayValue: string;
}

interface ISelectData {
  elementType: string;
  elementConfig: {
    options: IOptions[];
  };
  value: string;
}

interface IContactDataProps {
  ingredients: IIngredients;
  totalPrice: number;
  history: History;
}

interface IOrderForm {
  name: IInputData;
  country: IInputData;
  street: IInputData;
  zipCode: IInputData;
  email: IInputData;
  deliveryMethod: ISelectData;
}

interface IContactDataState {
  orderForm: IOrderForm;
  formIsValid: boolean;
  loading: boolean;
}

class ContactData extends React.Component<
  IContactDataProps,
  IContactDataState
> {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street Address"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP CODE"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: "fastest",
        validation: {},
        valid: true
      }
    },
    formIsValid: false,
    loading: false
  };

  orderHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ loading: true });

    const formData = {};

    for (let formElId in this.state.orderForm) {
      formData[formElId] = this.state.orderForm[formElId].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  inputChangedHandler = (event: Event, inputId: string) => {
    let el = event.target as HTMLInputElement;

    const updatedOrderForm = {
      ...this.state.orderForm
    };

    const updatedFormEl = {
      ...updatedOrderForm[inputId]
    };

    updatedFormEl.value = el.value;
    updatedFormEl.valid = this.checkValidation(
      updatedFormEl.value,
      updatedFormEl.validation
    );
    updatedFormEl.touched = true;
    updatedOrderForm[inputId] = updatedFormEl;

    let formIsValid = true;
    for (let inputIds in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIds].valid && formIsValid;
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  checkValidation(value: any, rules: any) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  render() {
    const formElementsArray: { id: string; config: IOrderForm }[] = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formEl: any) => (
          <Input
            key={formEl.id}
            elementType={formEl.config.elementType}
            elementConfig={formEl.config.elementConfig}
            value={formEl.config.value}
            invalid={!formEl.config.valid}
            shouldValidate={formEl.config.validation}
            touched={formEl.config.touched}
            changed={(event: Event) =>
              this.inputChangedHandler(event, formEl.id)
            }
          />
        ))}
        <Button
          btnType="Success"
          clicked={this.orderHandler}
          disabled={!this.state.formIsValid}
        >
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
