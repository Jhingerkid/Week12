import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreateTaskScreen = (props) => {
  const [count, setCount] = useState(0);
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    setCount(count + 1);
    let newTask = { id: count, taskName: data.taskname, completion: false };
    var newTasks = props.toDoList;
    newTasks.push(newTask);
    props.setToDoList(newTasks);
    props.onClose(false);
  }
  if (!props.showTaskCreation) {
    return null;
  }
  return (
    <div className="create-task">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>What should we do sir?</label>
        <input type="text" {...register("taskname")} />
        <label>And what will it cost?</label>
        <input type="number" {...register("moralitycost")} />
        <input className="add-task" type="submit" value="Create Task" />
      </form>
      <button onClick={props.onClose} className="close-modal">
        Close
      </button>
    </div>
  );
};

export const tasks = [];

export default CreateTaskScreen;
