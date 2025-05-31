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
      number: { value: 200 },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.8 },
      size: { value: 4 },
      move: { enable: true, speed: 1 }
    },
    interactivity: { events: { onhover: { enable: false } } },
    retina_detect: true
  });
};


