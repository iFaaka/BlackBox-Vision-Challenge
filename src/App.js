import { useState } from "react";
import "./App.css";
import { QuestionGame } from "./components/QuestionGame";

function App() {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div className={`App ${lightMode === false ? "light" : "dark"}`}>
      <QuestionGame lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
}

export default App;
