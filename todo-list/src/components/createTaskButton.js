const CreateTaskButton = (props) => {
  return (
    <button className="create-task-button" onClick={props.onClick}>
      Create a task
    </button>
  );
};

export default CreateTaskButton;
