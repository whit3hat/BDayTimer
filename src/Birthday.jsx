import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";

const Birthday = ({ name, day, month }) => {
  //useState Hooks
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });

  if (name === undefined || day === undefined || month === undefined) {
    name = "Mady"; // Name of the Person
    month = 6; // Month of the Bday
    day = 30; // Day of the Bday
  }

  // get current time
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

  // Getting the Bday in Data Object
  // Subtract 1 from the month, numbers start at 0 in Data Object
  // Bday boolean
  const isItBday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        // Getting the current date
        const dateAtm = new Date();

        // if Bday has passed, set counter for next year
        let birthdayDay = new Date(currentYear, month - 1, day);
        if (dateAtm > birthdayDay) {
          birthdayDay = new Date(currentYear + 1, month - 1, day);
        } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
          birthdayDay = new Date(currentYear, month - 1, day);
        }

        // Getting current Time
        const currentTime = dateAtm.getTime();
        // Getting Bday time
        const birthdayTime = birthdayDay.getTime();

        // Time remaining for the Bday
        const timeRemaining = birthdayTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItBday,
        }));
        console.log(`${days}:${hours}:${minutes}:${seconds}, ${isItBday}`);
      };
      if (!isItBday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItBday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItBday, month]);

  let birth = new Date(currentYear, month - 1, day);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthBday = monthNames[birth.getMonth()];

  return (
    <div className="page">
      <Countdown countdownData={state} name={name} />
      {!isItBday && (
        <>
          <div className="birthdate">
            Birth-Date: {day} {monthBday} {currentYear}
          </div>
        </>
      )}
    </div>
  );
};

export default Birthday;
