import React from "react";

const Task = (props) => {
  return (
    <div key={props.id} className="task">
      <input type="text" defaultValue={props.taskName} />
    </div>
  );
};

export default Task;
