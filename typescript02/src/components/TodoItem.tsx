import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  //event:ReactMoudseEvent 생략가능, 인수의 타입을 정의하는 건 선택 사항
  onRemoveTodo: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
