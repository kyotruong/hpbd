const modal = document.getElementById("custom-modal");
const btn = document.getElementById("wish-button");
const closeBtn = document.querySelector(".close-btn");

btn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

