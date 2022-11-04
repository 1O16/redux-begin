import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";

function Home() {
  const [text, setText] = useState("");
  /** useSelector는 getState랑 똑같은 기능(store에서 정보를 가져옴)이고 리액트에서는 mapStateToProps 대체입니다. */
  const toDos = useSelector((state) => state);
  /** useDispatch는 mapDispatchToProps 대체*/
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

export default Home;
