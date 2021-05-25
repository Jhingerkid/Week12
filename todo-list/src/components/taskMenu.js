import React, { useState } from "react";
import CreateTaskButton from "./createTaskButton";
import CreateTaskScreen from "./createTaskModal";
import TaskList from "./taskList";

const TaskMenu = (props) => {
  const [toDoList, setToDoList] = useState([]);
  const [totalList, setTotalList] = useState([]);
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
        setToDoList={setToDoList}
        toDoList={toDoList}
        setTotalList={setTotalList}
        totalList={totalList}
      />
      <TaskList
        totalList={totalList}
        toDoList={toDoList}
        setToDoList={setToDoList}
        setTotalList={setTotalList}
      />
      <button onClick={props.onClose} className="close-modal">
        Close
      </button>
    </div>
  );
};

export default TaskMenu;
