const clock = document.getElementById('clock');
const date = document.getElementById('date');

// create function (timeGenerator) to get current time: Hour, minutes, seconds!
function timeGenerator() {
    const curTime = new Date();
    let curHour = curTime.getHours();
    let curMinute = curTime.getMinutes();
    let curSecond = curTime.getSeconds();

    const timeTable = `
    <span>${curHour}:</span>
    <span>${curMinute}:</span>
    <span>${curSecond}</span>
    `;
    clock.innerHTML = timeTable;
}

// Create function (dateGenerator) to get current Date: day, Month, year!
function dateGenerator() {
    const currentDate = new Date().toDateString();
    const dateHolder = `
    <span>${currentDate}</span>
    `
    date.innerHTML = dateHolder;
}

setInterval(timeGenerator,1000);
dateGenerator();