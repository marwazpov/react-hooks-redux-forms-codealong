import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {todoAdded} from "./todosSlice";


function CreateTodo() {
  const [text, setText] = useState("");

  function handleChange(event){
    setText(event.target.value);
  }

  const dispatch = useDispatch();

  function handleSubmit(event){
    event.preventDefault();
    dispatch(todoAdded(text));
  }

  return (
  <div>
    <form>
      <p>
        <label>add todo</label>
        <input type="text" onChange={handleChange} value={text}/>
      </p>
      <input type="submit" onSubmit={handleSubmit}/>
    </form>
    <p> Form Text: {text}</p>
  </div>
  );
}

export default CreateTodo;
