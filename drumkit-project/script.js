const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

const playSound = (e) => {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const item = document.querySelector(`.item[data-key="${e.keyCode}"]`);
  if (!audio) return;

  item.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

const items = Array.from(document.querySelectorAll(".item"));
items.forEach((item) =>
  item.addEventListener("transitionend", removeTransition)
);
window.addEventListener("keydown", playSound);
