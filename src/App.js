import { useState } from "react";

import classes from "./App.module.css";

import Card from "./components/UI/Card";
import Header from "./components/Header";
import Expense from "./components/expenses/Expense";
import Section from "./components/UI/Section";
import ItemList from "./components/items/ItemList";
import ItemForm from "./components/items/ItemForm";

function App() {
  const [items, setItems] = useState([]);

  const onAddItemHandler = (enteredItems) => {
    setItems((prevItems) => {
      return [enteredItems, ...prevItems];
    });
  };

  const deleteItemHandler = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return updatedItems;
    });
  };

  return (
    <Card className={classes.container}>
      <Header items={items} />
      <Expense items={items} />
      <ItemList onDeleteItem={deleteItemHandler} items={items} />
      <Section>Agrega una transacción</Section>
      <ItemForm onAddItem={onAddItemHandler} />
      <Section>Historial</Section>
      {items.length === 0 && (
        <p className={classes["no-history"]}>
          No has hecho ninguna transacción. ¡Ingresa alguna!
        </p>
      )}
      
    </Card>
  );
}

export default App;
