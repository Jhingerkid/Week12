const CreateTaskButton = (props) => {
  return (
    <div className="create-task-button">
      <button onClick={props.onClick}>Create a task</button>
    </div>
  );
};

export default CreateTaskButton;
