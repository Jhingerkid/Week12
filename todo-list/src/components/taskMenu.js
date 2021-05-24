import React, { useState } from "react";
import CreateTaskButton from "./createTaskButton";
import CreateTaskScreen from "./createTaskModal";
import TaskForm from "./taskform";

const TaskMenu = (props) => {
  const [toDoList, setToDoList] = useState([]);
  const [showTaskCreation, setTaskShow] = useState(false);
  console.log(toDoList);
  if (!props.show) {
    return null;
  }
  return (
    <div id={props.color} className="task-menu">
      <CreateTaskButton onClick={() => setTaskShow(true)} />
      <CreateTaskScreen
        onClose={() => setTaskShow(false)}
        showTaskCreation={showTaskCreation}
        setToDoList={setToDoList}
        toDoList={toDoList}
      />
      <TaskForm toDoList={toDoList} setToDoList={setToDoList} />
      <button onClick={props.onClose} className="close-modal">
        Close
      </button>
    </div>
  );
};

export default TaskMenu;
