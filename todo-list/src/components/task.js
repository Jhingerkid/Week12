import React from "react";

const Task = (props) => {
  function completeTask(e, id) {
    e.preventDefault();
    let newTasks = [...props.toDoList];
    let newTotalTasks = [...props.totalList];
    let index = newTasks.findIndex((i) => i.id === id);
    let totalIndex = newTotalTasks.findIndex((i) => i.id === id);
    newTasks[index].completion = !newTasks[index].completion;
    newTotalTasks[totalIndex].completion = newTasks[index].completion;
    props.setToDoList(newTasks);
    props.setTotalList(newTotalTasks);
    console.log("complete");
  }
  function removeTask(e) {
    e.preventDefault();
    var newTasks = [...props.toDoList];
    newTasks = newTasks.filter((item) => item.id !== props.id);
    var newTotalTasks = [...props.totalList];
    newTotalTasks = newTotalTasks.filter((item) => item.id !== props.id);
    props.setToDoList(newTasks);
    props.setTotalList(newTotalTasks);
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
