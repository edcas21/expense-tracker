const formatDate = (d) => {
  d = new Date(d);

  let month = `${d.getMonth() + 1}`;

  let day = `${d.getDate()}`;

  const year = d.getFullYear();

  if (month.length < 2) {
    month = `0${day}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, month, day].join("-");
};

export default formatDate;
