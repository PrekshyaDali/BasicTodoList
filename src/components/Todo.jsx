import { useState } from "react";
import classes from "./todo.module.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  console.log(inputData);
  const ChangeHandler = (event) => {
    return setInputData(event.target.value);
  };
  console.log(items);
  const addItem = () => {
    if (!inputData) {
      return;
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (index)=>{

  }
  return (
    <div className={classes.maindiv}>
      <div className={classes.boxdiv}>
        <img className={classes.icon} src="Todo-icon.png" alt="Todo" />
        <span>
          <p>Add your List Here!!</p>
        </span>
        <div className={classes.inputfield}>
          <div className={classes.inputContainer}>
            <input
              value={inputData}
              onChange={ChangeHandler}
              className={classes.input}
              type="text"
              placeholder="Type here..."
            />
            <button onClick={addItem} className={classes.addbutton}></button>
          </div>
        </div>
        <button className={classes.submit}>CHECKLIST</button>

        {/* <div className={classes.show}>
          <div className={classes.eachItem}>Apple</div>
          <button className={classes.delete}>-</button>
        </div> */}
        {items.map((item, index) => (
          <div key={index} className={classes.show}>
            <div className={classes.eachItem}>{item}</div>
            <button
              className={classes.delete}
              onClick={deleteItem} // Assuming you have a deleteItem function
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
