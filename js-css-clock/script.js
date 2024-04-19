const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setClockDate = () => {
  const time = new Date();

  const currentTimeInSeconds = time.getSeconds();

  const secondsInDegrees = (currentTimeInSeconds / 60) * 360 + 90; //added 90 because the styles is rotated initially to 90deg

  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;

  const currentTimeInMinutes = time.getMinutes();

  const minutesInDegrees =
    (currentTimeInMinutes / 60) * 360 + (currentTimeInSeconds / 60) * 6 + 90;

  minHand.style.transform = `rotate(${minutesInDegrees}deg)`;

  const currentTimeInHours = time.getHours();

  const hoursInDegrees =
    (currentTimeInHours % 12) * 30 + (currentTimeInMinutes / 60) * 30 + 90;

  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
};
// todo: add transition to css and remove when clock rotates 360 degrees
setInterval(setClockDate, 1000);
