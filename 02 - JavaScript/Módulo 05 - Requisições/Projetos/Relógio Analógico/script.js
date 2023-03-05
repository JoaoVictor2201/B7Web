const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);

let digitalElement = select('.digital');
let secondsPointer = select('.p_s');
let minutesPointer = select('.p_m');
let hoursPointer = select('.p_h');

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

  let secondsDeg = ((360 / 60) * second) - 90;
  let minutesDeg = ((360 / 60) * minute) - 90;
  let hoursDeg = ((360 / 12) * hour) - 90;

  secondsPointer.style.transform = `rotate(${secondsDeg}deg)`;
  minutesPointer.style.transform = `rotate(${minutesDeg}deg)`;
  hoursPointer.style.transform = `rotate(${hoursDeg}deg)`;
}

function fixZero(time) {
  return time < 10 ? `0${time}` : time
}

setInterval(updateClock, 1000);
updateClock();