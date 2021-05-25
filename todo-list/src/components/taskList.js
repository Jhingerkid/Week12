import React from "react";
import Task from "./task";

const TaskList = (props) => {
  return (
    <div className="task-form">
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
              totalList={props.totalList}
              setTotalList={props.setTotalList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
