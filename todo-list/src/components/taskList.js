import React from "react";
import Task from "./task";

const TaskList = (props) => {
  function sortComplete(e) {
    e.preventDefault();
    let completedTasks = props.totalList
      .filter((task) => task.completion === true)
      .map((completedTask) => {
        return completedTask;
      });
    props.setToDoList(completedTasks);
  }
  function sortIncomplete(e) {
    e.preventDefault();
    let incompletedTasks = props.totalList
      .filter((task) => task.completion === false)
      .map((incompletedTask) => {
        return incompletedTask;
      });
    props.setToDoList(incompletedTasks);
  }
  function sortAll(e) {
    e.preventDefault();
    props.setToDoList(props.totalList);
  }
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
      <div className="task-form-operations">
        <button onClick={(e) => sortComplete(e)} className="task-form-button">
          Completed Tasks
        </button>
        <button onClick={(e) => sortIncomplete(e)} className="task-form-button">
          Incompleted Tasks
        </button>
        <button onClick={(e) => sortAll(e)} className="task-form-button">
          All Tasks
        </button>
      </div>
    </div>
  );
};

export default TaskList;
