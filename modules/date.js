import { DateTime } from './luxon.js';

function updateCurrentDate() {
  const dateElement = document.querySelector('#date');

  function setCurrentDate() {
    // eslint-disable-next-line no-undef
    const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    dateElement.innerHTML = currentDate;
  }

  setCurrentDate();
  setInterval(setCurrentDate, 1000);
}
export default updateCurrentDate;