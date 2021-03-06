import React from "react";

const Task = (props) => {
  function updateTaskName(e, id) {
    e.preventDefault();
    let newTaskName = e.target.value;
    let tasks = [...props.toDoList];
    let index = tasks.findIndex((i) => i.id === id);
    tasks[index].taskName = newTaskName;
    props.setTotalList(tasks);
  }
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
      <input
        onChange={(e) => updateTaskName(e, props.id)}
        type="text"
        defaultValue={props.taskName}
      />
      <button onClick={(e) => removeTask(e)}>Remove Task</button>
      <button onClick={(e) => completeTask(e, props.id)}>
        Change Task State
      </button>
    </div>
  );
};

export default Task;
