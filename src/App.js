import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

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
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h2>
              Mady, it is
              <h1>{calculateDaysUntilBirthday()}</h1>
              {calculateDaysUntilBirthday() > 1 ? "days" : "day"} until your
              birthday!
            </h2>
            {/* <CountDownTimer hoursMinSecs={hoursMinSecs} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
