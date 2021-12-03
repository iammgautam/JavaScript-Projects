const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const degreeFunc = (unit, fraction) => {
    return (unit / fraction) * 360 + 90;
  };


function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = degreeFunc(seconds,60);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds)
    if (secondsDegrees === 444) {
        secondHand.classList.add('no-transition');
    }else if (secondsDegrees === 96) {
        secondHand.classList.remove('no-transition');
    }

    const mins = now.getMinutes();
    const minsDegrees = degreeFunc(mins,60);
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = degreeFunc(hour,12);;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate,1000);