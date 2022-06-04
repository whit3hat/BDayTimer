const calculateDaysUntilBirthday = () => {
  let today = new Date();

  // Since you're using 0 as the first number it has to be 5=june 29=30th day
  let year =
    today > (today.getMonth() === 5 && today.getDay === 29)
      ? // You can add +1 after the 'getFullYear() if bday has already passed for this year
        today.getFullYear()
      : today.getFullYear();

  let birthday = new Date(year, 5, 29);

  const difference = birthday - today;

  return difference;
};

export default calculateDaysUntilBirthday;
