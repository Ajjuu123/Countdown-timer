// declaring const and grabbing id's
const daysEl = document.getElementById('days'); 
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds'); 

//new date
const newYears = '1 Jan 2023'
 

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
 
    const totolSeconds = new Date (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totolSeconds / 3600 / 24);
    const hours = Math.floor(totolSeconds / 3600) % 24;
    const mins = Math.floor(totolSeconds / 60) % 60;
    const seconds = Math.floor(totolSeconds % 60);
    
    //console.log(days, hours,minutes, seconds);
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//Initial Call 
countdown() 

setInterval(countdown, 1000); 