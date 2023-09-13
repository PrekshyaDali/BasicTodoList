import { useEffect, useState } from "react";
import classes from "./todo.module.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Load data from local storage when the component mounts
    const storedItems = JSON.parse(localStorage.getItem("myItems"));
    if (storedItems && storedItems.length > 0) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever the 'items' state changes
    localStorage.setItem("myItems", JSON.stringify(items));
  }, [items]);

  const ChangeHandler = (event) => {
    return setInputData(event.target.value);
  };

  const addItem = () => {
    if (!inputData) {
      return;
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

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
        <button className={classes.submit} onClick={removeAll}>
          Remove All
        </button>

        {items.map((item, index) => (
          <div key={index} className={classes.show}>
            <div className={classes.eachItem}>{item}</div>
            <button
              className={classes.delete}
              onClick={() => deleteItem(index)}
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
