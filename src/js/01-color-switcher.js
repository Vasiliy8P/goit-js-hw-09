const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

btnStartEl.addEventListener('click', onBtnStartClick);
btnStopEl.addEventListener('click', onBtnStopClick);

let intervalId = null;

function onBtnStartClick() {
    intervalId = setInterval(() => {        
        bodyEl.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000);
    
    btnStartEl.setAttribute("disabled", "");
};

function onBtnStopClick() { 
    clearInterval(intervalId);
    btnStartEl.removeAttribute("disabled");
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
