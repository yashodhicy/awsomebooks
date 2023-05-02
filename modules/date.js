import { DateTime } from './luxon.js';

export function updateCurrentDate() {
  const dateElement = document.querySelector('#date');

  function setCurrentDate() {
    const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    dateElement.innerHTML = currentDate;
  }

  setCurrentDate();
  setInterval(setCurrentDate, 1000);
}
