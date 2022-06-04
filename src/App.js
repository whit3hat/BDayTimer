import "./App.css";
import CountDownTimer from "./CountDownTimer";
import calculateDaysUntilBirthday from "./calculateDays";

function App() {
  const calculateDaysUntilBirthday = () => {
    let today = new Date();
    let year = today.getFullYear();
    let birthday = new Date(year, 5, 30);
    const difference = birthday - today;

    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    };

    return timeLeft.days;
  };

  const hoursMinSecs = {
    hours: 600,
    minutes: 13,
    seconds: 30,
  };

  return (
    // <div className="App">
    //   <CountDownTimer hoursMinSecs={hoursMinSecs} />
    // </div>
    calculateDaysUntilBirthday()
  );
}

export default App;
