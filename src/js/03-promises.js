import Notiflix from 'notiflix';

const formSubmit = document.querySelector('.form'); 
const inputFirstDelay = document.querySelector('input[name="delay"]'); 
const inputDelayStep = document.querySelector('input[name="step"]'); 
const inputAmount = document.querySelector('input[name="amount"]'); 
 
formSubmit.addEventListener("submit", onformSubmitClick); 
 
function onformSubmitClick(evt) {  
  evt.preventDefault();
  const delayValue = Number(inputFirstDelay.value);
  const stepValue = Number(inputDelayStep.value);
  const amountValue = Number(inputAmount.value);
   
  for (let i = 1; i <= amountValue; i += 1) { 
    const stepDelay = delayValue + stepValue * (i - 1); 
    
    createPromise(i, stepDelay) 
      .then(onSuccess) 
      .catch(onError); 
  }     
}; 
 
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay });
      }
    }, delay)
  })
}

function onSuccess({ position, delay }) { 
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onError({ position, delay }) { 
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};
