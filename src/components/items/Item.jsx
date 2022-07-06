import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import classes from "./Item.module.css";
import React,{useState} from "react";


import Card from "../UI/Card";

// A component that shows the title and amount of the transaction
const Item = (props) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  // const [date,setDate] = useState(new Date());

// const onChange = date => {
//     setDate(date);
// };
  const deleteHandler = () => {
    props.onDeleteItem(props.id);
  };

  const deleteModeHandler = () => {
    setDeleteMode(!deleteMode);
  };

  // RegEx used for thousand separators
  const search_value = /\B(?=(\d{3})+(?!\d))/g;

  const ExampleCustomTimeInput = ({ date, value, onChange }) => (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ border: "solid 1px orange" }}
    />
  );

  return (
    <li onClick={deleteModeHandler}>
{/* <div className={classes.title}><Calendar onChange={onChange} value={date}/>
    {date.toString()}</div> */}
    
      <Card className={`${props.income ? classes.income : classes.expense}`}>
      <div className={classes.title}>{props.title}</div>
      
      
        <div className={classes.amount}>
          {`${props.income ? "+" : "-"}${props.amount
            .toFixed(2)
            .toString()
            .replace(search_value, ",")}`}
        </div>
        {deleteMode && (
          <button className={classes.delete} onClick={deleteHandler}>
            x
          </button>
        )}
      </Card>
      <div className={classes.title}><DatePicker selected={startDate} onChange={(date:Date) => setStartDate(Date)} showTimeInput
      customTimeInput={<ExampleCustomTimeInput />} /></div>

    </li>
  );
};

export default Item;
