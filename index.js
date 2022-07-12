
console.log("Hey");

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const opendate = '12 Aug 2022';

function countdown() {
    const currentDate = new Date();
    const openingdate = new Date(opendate);

    const totsec = (openingdate - currentDate) / 1000;
    const days = Math.floor(totsec / 3600 / 24);
    const hours = Math.floor(totsec / 3600 % 24);
    const minutes = Math.floor(totsec / 60) % 60;
    const seconds = Math.floor(totsec) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}
countdown();
setInterval(countdown, 1000);