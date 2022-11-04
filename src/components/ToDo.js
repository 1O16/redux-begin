import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, id }) {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(deleteToDo(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onDeleteClick}>DEL</button>
    </li>
  );
}

export default ToDo;
