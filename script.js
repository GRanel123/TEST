
let progress = 0;
const bar = document.getElementById("progressBar");

const interval = setInterval(() => {
  progress += Math.random() * 12;
  if (progress >= 100) {
    progress = 100;
    clearInterval(interval);

    // здесь можно открыть главный экран
    // tg.sendData("loaded");
  }
  bar.style.width = progress + "%";
}, 400);

// Particles background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  s: Math.random() * 0.5 + 0.2
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.y += p.s;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();
