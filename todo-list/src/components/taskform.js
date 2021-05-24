import React from "react";
import Task from "./task";

const TaskForm = (props) => {
  function sortStatus(e) {
    e.preventDefault();
    console.log("hi");
  }
  console.log("taskformlist");
  console.log(props.toDoList);
  return (
    <form className="task-form">
      <div className="task-list">
        {props.toDoList.map((task) => {
          return (
            <Task
              key={task.id}
              taskName={task.taskName}
              setToDoList={props.setToDoList}
              toDoList={props.toDoList}
              id={task.id}
              completion={task.completion}
            />
          );
        })}
      </div>
      <div className="task-form-operations">
        <input className="task-form-input" type="submit" value="submit" />
        <button onClick={(e) => sortStatus(e)} className="task-form-button">
          Sort by completion status
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
