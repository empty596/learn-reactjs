import React, { useState } from "react";
import TodoList from "./components/TodoList";

TodoFeatures.propTypes = {};

function TodoFeatures(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Lập trình hướng đối tượng",
      status: "completed",
    },
    {
      id: 2,
      title: "Lập trình website nâng cao",
      status: "new",
    },
    {
      id: 3,
      title: "Lập trình mã nguồn mở",
      status: "new",
    },
    {
      id: 4,
      title: "Hệ điều hành linux",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilterStatus] = useState("all");
  const handleTodoClick = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus("all");
  };
  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
  };
  const handleShowNewClick = () => {
    setFilterStatus("new");
  };
  const renderTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );
  return (
    <div>
      <TodoList todoList={renderTodoList} todoClick={handleTodoClick} />
      <button onClick={handleShowAllClick}>Show All</button>
      <button onClick={handleShowCompletedClick}>Show completed</button>
      <button onClick={handleShowNewClick}>Show New</button>
    </div>
  );
}

export default TodoFeatures;
