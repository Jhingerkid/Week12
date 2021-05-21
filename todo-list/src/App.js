import "./App.css";
import TaskMenu from "./components/taskMenu";
import MenuButton from "./components/openTaskMenuButton";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [menuColor, setColor] = useState("");
  function displayMenu(colorId) {
    setColor(colorId);
    setShow(true);
  }
  return (
    <div className="App">
      <div className="task-button-box">
        <MenuButton
          buttonTitle="Righteousness"
          buttonId="righteous"
          onClick={() => displayMenu("blue")}
        />
        <MenuButton
          buttonTitle="Wretchedness"
          buttonId="fallen"
          onClick={() => displayMenu("red")}
        />
      </div>
      <TaskMenu onClose={() => setShow(false)} show={show} color={menuColor} />
    </div>
  );
}

export default App;
