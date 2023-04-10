const clock = document.getElementById("clock");
const date = document.getElementById("date");

function timeGenerator() {
  const curTime = new Date();
  let curHour = curTime.getHours();
  let curMinute = curTime.getMinutes();
  let curSecond = curTime.getSeconds();
  let amPmConvertor = curHour >= 12 ? "PM" : "AM";

  if (curHour > 12) {
    curHour = curHour - 12;
  } else if (curHour <= 9) {
    curHour = "0" + curHour;
  } else {
    curHour;
  }

  if (curMinute <= 9) {
    curMinute = "0" + curMinute;
  } else {
    curMinute;
  }

  if (curSecond <= 9) {
    curSecond = "0" + curSecond;
  } else {
    curSecond;
  }

  clock.innerText = `${curHour}:${curMinute}:${curSecond} ${amPmConvertor}`;
}

const months = [
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
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "saturday",
];

function dateGenerator() {
  const exactDate = new Date();
  const curYear = exactDate.getFullYear();
  const curMonth = months[exactDate.getMonth()];
  const curDate = exactDate.getDate();
  const curDay = daysOfWeek[exactDate.getDay()];

  date.innerText = `${curDay}, ${curMonth} ${curDate} ${curYear}`;
}

setInterval(timeGenerator, 0);
dateGenerator();
