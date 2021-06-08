import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./stylle.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  todoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  todoClick: null,
};

function TodoList({ todoList, todoClick }) {
  const handleClick = (index) => {
    if (!todoClick) return;
    todoClick(index);
  };
  return (
    <ul className='todo-list'>
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames({ completed: todo.status === "completed" })}
          onClick={() => handleClick(index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
