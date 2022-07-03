import "./App.css";
import { useTimeOut } from "./Hooks/useTimeOut";

function App() {
  const ready = useTimeOut(5000);
  return (
    <div className="App">
      <div>{ready ? "Ready1" : "Not Ready"}</div>
    </div>
  );
}

export default App;
