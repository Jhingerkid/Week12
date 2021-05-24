import React from "react";

const Task = (props) => {
  function completeTask(e, id) {
    e.preventDefault();
    let newTasks = [...props.toDoList];
    let index = newTasks.findIndex((i) => i.id === id);
    newTasks[index].completion = !newTasks[index].completion;
    props.setToDoList(newTasks);
  }
  function removeTask(e) {
    e.preventDefault();
    var newTasks = props.toDoList;
    newTasks = newTasks.filter((item) => item.id !== props.id);
    props.setToDoList(newTasks);
  }
  if (props.completion) {
    var taskCompletion = "complete";
  } else {
    taskCompletion = "incomplete";
  }
  return (
    <div className="task">
      <div className="completion-box" id={taskCompletion}></div>
      <input type="text" defaultValue={props.taskName} />
      <button onClick={(e) => removeTask(e)}>Remove Task</button>
      <button onClick={(e) => completeTask(e, props.id)}>
        Change Task State
      </button>
    </div>
  );
};

export default Task;
