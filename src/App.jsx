import Todo from "./components/Todo";
import { useState } from "react";

const App =()=>{

  const[isLoggedIn, setIsLoggedIn] = useState(false);




  return(
    <Todo ></Todo>
  );
}

export default App;