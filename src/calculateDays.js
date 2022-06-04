const calculateDaysUntilBirthday = () => {
  let today = new Date();

  let year =
    today > (today.getMonth() === 6 && today.getDay === 30)
      ? today.getFullYear()
      : today.getFullYear();

  let birthday = new Date(year, 6, 29);

  const difference = birthday - today;

  return difference;
};

export default calculateDaysUntilBirthday;
