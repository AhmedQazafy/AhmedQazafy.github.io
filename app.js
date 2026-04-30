const canvas = document.querySelector("#starfield");
const context = canvas.getContext("2d");
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

let width = 0;
let height = 0;
let particles = [];

const palette = ["#55e7ff", "#a7ff6a", "#a78bfa", "#ffd166", "#ff5c9a"];

function resizeCanvas() {
  const scale = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(scale, 0, 0, scale, 0, 0);
  createParticles();
}

function createParticles() {
  const count = Math.min(120, Math.max(56, Math.floor(width / 14)));
  particles = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    radius: Math.random() * 1.6 + 0.45,
    color: palette[index % palette.length],
  }));
}

function drawParticles() {
  context.clearRect(0, 0, width, height);

  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > height) particle.vy *= -1;

    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fillStyle = particle.color;
    context.globalAlpha = 0.62;
    context.fill();
  }

  context.globalAlpha = 0.18;
  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        context.beginPath();
        context.moveTo(particles[i].x, particles[i].y);
        context.lineTo(particles[j].x, particles[j].y);
        context.strokeStyle = distance < 72 ? "#55e7ff" : "#a7ff6a";
        context.lineWidth = 0.65;
        context.stroke();
      }
    }
  }
  context.globalAlpha = 1;

  requestAnimationFrame(drawParticles);
}

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawParticles();
