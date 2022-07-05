import { useState } from "react";

import classes from "./ItemForm.module.css";

import Card from "../UI/Card";

// A form for entering the transactions
const ItemForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [isIncome, setIsIncome] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitle.trim() !== "" &&
      enteredAmount.trim() !== "" &&
      isIncome !== ""
    ) {
      const items = {
        id: Math.random().toString(),
        title: enteredTitle,
        amount: +enteredAmount,
        income: isIncome,
      };

      setEnteredTitle("");
      setEnteredAmount("");
      setIsIncome("");

      props.onAddItem(items);
    }
  };

  return (
    <Card className={classes.wrapper}>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Transacción</label>
        <input
          id="title"
          type="text"
          placeholder="Ingresa tu transacción"
          value={enteredTitle}
          onChange={titleHandler}
        ></input>
        <label htmlFor="amount">Monto</label>
        <input
          id="amount"
          type="number"
          placeholder="Ingresa una cantidad..."
          value={enteredAmount}
          onChange={amountHandler}
        ></input>
        <div className={classes["radio-buttons"]}>
          <div>
            <input
              id="income"
              type="radio"
              name="item-type"
              checked={isIncome === true}
              onChange={() => setIsIncome(true)}
            ></input>
            <label htmlFor="income">Ingreso</label>
          </div>
          <div>
            <input
              id="expense"
              type="radio"
              name="item-type"
              checked={isIncome === false}
              onChange={() => setIsIncome(false)}
            ></input>
            <label htmlFor="expense">Gasto</label>
          </div>
        </div>
        <button>Agregar transacción</button>
      </form>
    </Card>
  );
};

export default ItemForm;
