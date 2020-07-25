const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril", 
  "Maio", 
  "Junho", 
  "Julho", 
  "Agosto", 
  "Stembro", 
  "Outubro", 
  "Novembro", 
  "Dezembro"
]

const weekdays = [
  "Domingo",
  "Segunda", 
  "Terça", 
  "Quarta", 
  "Quinta", 
  "Sexta", 
  "Sábado", 
]

const countdownBox = document.querySelector('.countdown');
const dateItems = document.querySelectorAll('.box h2');


let futureDate = new Date(2020,6,25,18,00,0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];

// future date in milliseconds
const futureTime = futureDate.getTime();

function timeRemaining() {
  const today = new Date().getTime();
  const t = futureTime - today;   
 
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hrs

  // values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60  * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculating the values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // values array
  const values = [days, hours, minutes, seconds];

  function addZero(item){
      if(item < 10){
          return item = `0${item}`
      }
      return item
  } 

  dateItems.forEach(function(item, index){
      item.innerHTML = addZero(values[index]);
  });
  if(t < 0) {
      clearInterval(countdown);
      // add class to container below to celebrate or extra text
      window.location.href = "https://www.youtube.com/watch?v=WF--FxJLsB0&feature=youtu.be";
  }
}

//countdown
let countdown = setInterval(timeRemaining, 1000);

timeRemaining();



