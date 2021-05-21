import React, { useState } from "react";
import CreateTaskButton from "./createTaskButton";
import CreateTaskScreen, { tasks } from "./createTaskModal";
import TaskForm from "./taskform";

const TaskMenu = (props) => {
  const [toDoList, setToDoList] = useState(tasks);
  const [showTaskCreation, setTaskShow] = useState(false);
  if (!props.show) {
    return null;
  }
  return (
    <div id={props.color} className="task-menu">
      <CreateTaskButton onClick={() => setTaskShow(true)} />
      <CreateTaskScreen
        onClose={() => setTaskShow(false)}
        showTaskCreation={showTaskCreation}
        setToDoList={() => setToDoList(tasks)}
      />
      <TaskForm toDoList={toDoList} />
      <button onClick={props.onClose} className="close-modal">
        Close
      </button>
    </div>
  );
};

export default TaskMenu;
