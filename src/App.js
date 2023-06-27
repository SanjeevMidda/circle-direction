import "./index.css";
import circle from "./imgs/Group 24.png";
import rightArrow from "./imgs/right.svg";
import leftArrow from "./imgs/left.svg";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(true);

  return (
    <div className="App">
      <img
        src={leftArrow}
        alt=""
        class="arrow"
        onClick={() => setStatus(false)}
      />
      <img
        src={circle}
        alt=""
        className={status ? "clockwise" : "antiClockwise"}
      />
      <img
        src={rightArrow}
        alt=""
        class="arrow"
        onClick={() => setStatus(true)}
      />
    </div>
  );
}

export default App;
