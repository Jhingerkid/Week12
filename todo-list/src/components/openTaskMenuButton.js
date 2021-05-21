const MenuButton = (props) => {
  return (
    <div className="task-menu-button">
      <button id={props.buttonId} onClick={props.onClick}>
        {props.buttonTitle}
      </button>
    </div>
  );
};

export default MenuButton;
