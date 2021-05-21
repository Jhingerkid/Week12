import React from "react";
import Task from "./task";

const TaskForm = (props) => {
  return (
    <div className="task-form">
      <form>
        {props.toDoList.map((task) => {
          return <Task key={task.id} taskName={task.taskName} />;
        })}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default TaskForm;
