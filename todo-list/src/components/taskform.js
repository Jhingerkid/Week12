import React from "react";
import Task from "./task";

const TaskForm = (props) => {
  return (
    <form className="task-form">
      <div className="task-list">
        {props.toDoList.map((task) => {
          return <Task key={task.id} taskName={task.taskName} />;
        })}
      </div>
      <input className="task-form-input" type="submit" value="submit" />
    </form>
  );
};

export default TaskForm;
