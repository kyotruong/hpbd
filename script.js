// script.js
function showMessage() {
  document.getElementById('overlay').style.display = 'block';
}

function hideMessage() {
  document.getElementById('overlay').style.display = 'none';
}

window.onload = () => {
  particlesJS('snow', {
    particles: {
      number: { value: 150 },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.7 },
      size: { value: 3 },
      move: { enable: true, speed: 0.6 }
    },
    interactivity: { events: { onhover: { enable: false } } },
    retina_detect: true
  });
};
