import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
  /** 파라미터 정보를 가져와 활용하고 싶다면 useParams */
  const ID = useParams().id;
  const toDos = useSelector((state) => state);

  const toDoText = toDos.find((toDo) => toDo.id === parseInt(ID));

  return (
    <>
      <h1>{toDoText.text}</h1>
      <p>Created At : {toDoText.id}</p>
      <Link to={`/`}>
        <button>Go Back</button>
      </Link>
    </>
  );
}

export default Detail;
