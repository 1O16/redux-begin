import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

// reducer : 현재 상태의 application과 함께 불려지는 function (+ with action) return하는 것은 application의 state가 됨
// action : reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)
// if else 대신 switch 사용
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

const countStore = legacy_createStore(countModifier);
const onChangeCount = () => {
  number.innerText = countStore.getState();
};
// subscribe : store의 변화를 감지하면 인자값으로 준 함수를 실행
countStore.subscribe(onChangeCount);

// dispatch : reducer에게 action을 보내는 방법
add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
