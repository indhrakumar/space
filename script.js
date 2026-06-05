const starsContainer = document.getElementById("stars");
const sscontainer = document.getElementById("shootingstars");
const starCount = window.innerWidth < 768 ? 200 : 800;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");

  star.classList.add("star");

  const size = Math.random() * 2 + 1;

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  star.style.animationDelay = `${Math.random() * 2}s`;
  star.style.animationDuration = `${Math.random() * 3 + 1}s`;

  starsContainer.appendChild(star);
}
function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  // Start position (top area)
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * (window.innerHeight * 0.3);

  // End position (bottom area)
  const endX = Math.random() * window.innerWidth;
  const endY =
    window.innerHeight * 0.6 + Math.random() * (window.innerHeight * 0.4);

  const dx = endX - startX;
  const dy = endY - startY;

  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  star.style.left = `${startX}px`;
  star.style.top = `${startY}px`;

  star.style.setProperty("--dx", `${dx}px`);
  star.style.setProperty("--dy", `${dy}px`);
  star.style.setProperty("--angle", `${angle}deg`);

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2000);
}
function startShootingStars() {
  createShootingStar();

  const nextTime = Math.random() * 5000 + 1000;

  setTimeout(startShootingStars, nextTime);
}

startShootingStars();
// instersection observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hide");
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.add("hide");
      }
    });
  },
  {
    threshold: 0.25,
  },
);

document.querySelectorAll(".planet").forEach((planet) => {
  observer.observe(planet);
});
