import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('button[data-start]');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

btnStartEl.setAttribute("disabled", "");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate <= options.defaultDate) {
            btnStartEl.setAttribute("disabled", "");
            Notiflix.Notify.failure("Please choose a date in the future");
            // window.alert("Please choose a date in the future");
            return;
        }

        btnStartEl.removeAttribute("disabled");     

        btnStartEl.addEventListener('click', onBtnStartClick);

        function onBtnStartClick() {
            const intervalId = setInterval(() => {
                const currentTime = new Date();
                const deltaTime = selectedDate - currentTime;
                const { days, hours, minutes, seconds } = convertMs(deltaTime);
                daysValue.textContent = addLeadingZero(days);
                hoursValue.textContent = addLeadingZero(hours);
                minutesValue.textContent = addLeadingZero(minutes);
                secondsValue.textContent = addLeadingZero(seconds);
                if (deltaTime <= 1000) {
                    clearInterval(intervalId); 
                }
            }, 1000);

            btnStartEl.setAttribute("disabled", "");
        }
    }
};

flatpickr(inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}



