const allPanels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

const toggleActive = (e) => {
  if (e.propertyName.includes("flex")) {
    e.target.classList.toggle("open-active");
  }
};

allPanels.forEach((panel) => panel.addEventListener("click", toggleOpen));
allPanels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
