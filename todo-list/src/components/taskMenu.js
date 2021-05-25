import React, { useState } from "react";
import CreateTaskButton from "./createTaskButton";
import CreateTaskScreen from "./createTaskModal";
import TaskList from "./taskList";

const TaskMenu = (props) => {
  const [toDoList, setToDoList] = useState([]);
  const [totalList, setTotalList] = useState([]);
  const [showTaskCreation, setTaskShow] = useState(false);
  function sortComplete(e) {
    e.preventDefault();
    let completedTasks = [...totalList]
      .filter((task) => task.completion === true)
      .map((completedTask) => {
        return completedTask;
      });
    setToDoList(completedTasks);
  }
  function sortIncomplete(e) {
    e.preventDefault();
    let incompletedTasks = [...totalList]
      .filter((task) => task.completion === false)
      .map((incompletedTask) => {
        return incompletedTask;
      });
    setToDoList(incompletedTasks);
  }
  function sortAll(e) {
    e.preventDefault();
    var allTasks = [...totalList];
    setToDoList(allTasks);
  }
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
      <button onClick={props.onClose} className="close-modal">
        Close
      </button>
    </div>
  );
};

export default TaskMenu;
