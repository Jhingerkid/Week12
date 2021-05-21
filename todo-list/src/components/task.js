import React from "react";

const Task = (props) => {
  return (
    <div key={props.id} className="task">
      <label>{props.taskName}</label>
      <input type="text" />
    </div>
  );
};

export default Task;
