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
      shape: { type: 'image', image: { src: 'https://cdn-icons-png.flaticon.com/512/4151/4151654.png', width: 32, height: 32 } },
      opacity: { value: 0.9 },
      size: { value: 10 },
      move: { enable: true, speed: 1 }
    },
    interactivity: { events: { onhover: { enable: false } } },
    retina_detect: true
  });
};
