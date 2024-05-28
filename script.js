const hHand = document.querySelector(".hour-hand");
const mHand = document.querySelector(".minute-hand");
const sHand = document.querySelector(".second-hand");

const updateanalogClock = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Calculate the rotation for each hand
    const hoursAngle = (360 / 12) * hours + (360 / (12 * 60)) * minutes;
    const minutesAngle = (360 / 60) * minutes + (360 / (60 * 60)) * seconds;
    const secondsAngle = (360 / 60) * seconds;
  
    // Apply the rotation to each hand
    hHand.style.transform = `rotate(${hoursAngle}deg)`;
    mHand.style.transform = `rotate(${minutesAngle}deg)`;
    sHand.style.transform = `rotate(${secondsAngle}deg)`;
  };
  
  updateanalogClock();
  setInterval(updateanalogClock, 1000);

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockElement = document.querySelector(".digital-time");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);