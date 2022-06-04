import "./App.css";
import CountDownTimer from "./CountDownTimer";

function App() {
  const hoursMinSecs = {
    hours: 600,
    minutes: 13,
    seconds: 30,
  };

  return (
    <div className="App">
      <CountDownTimer hoursMinSecs={hoursMinSecs} />
    </div>
  );
}

export default App;
