// Fireworks effect
const canvas = document.getElementById("fireworks-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(x, y) {
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: x,
      y: y,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 5 + 2,
      radius: 2,
      life: 100,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    });
  }
}

function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.fill();
    if (p.life <= 0) particles.splice(i, 1);
  });
}

function animateFireworks() {
  updateParticles();
  requestAnimationFrame(animateFireworks);
}
animateFireworks();

setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  createFirework(x, y);
}, 1200);

// Modal logic
const modal = document.getElementById("custom-modal");
const btn = document.getElementById("wish-button");
const span = document.querySelector(".close-btn");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
