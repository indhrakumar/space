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
const modal = document.getElementById("planetModal");

function openPlanetModal(data) {
  document.getElementById("planetName").textContent = data.name;

  document.getElementById("planetImage").src = data.image;

  document.getElementById("planetDistance").textContent = data.distance;

  document.getElementById("planetMoons").textContent = data.moons;

  document.getElementById("planetDiameter").textContent = data.diameter;

  document.getElementById("planetDay").textContent = data.day;

  document.getElementById("planetFact").textContent = data.fact;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}
document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});
const planets = {
  mercury: {
    name: "Mercury",
    image: "./img/mercury1.webp",
    distance: "57.9 million km",
    moons: "0",
    diameter: "4,879 km",
    day: "59 Earth days",
    fact: "Closest planet to the Sun.",
  },

  venus: {
    name: "Venus",
    image: "./img/venus.webp",
    distance: "108.2 million km",
    moons: "0",
    diameter: "12,104 km",
    day: "243 Earth days",
    fact: "Hottest planet in the Solar System.",
  },

  earth: {
    name: "Earth",
    image: "./img/Earth.webp",
    distance: "149.6 million km",
    moons: "1",
    diameter: "12,742 km",
    day: "24 hours",
    fact: "The only known planet known to support life.",
  },

  mars: {
    name: "Mars",
    image: "./img/mars.webp",
    distance: "227.9 million km",
    moons: "2",
    diameter: "6,779 km",
    day: "24.6 hours",
    fact: "Home to Olympus Mons, the tallest volcano in the Solar System.",
  },

  jupiter: {
    name: "Jupiter",
    image: "./img/jupiter.webp",
    distance: "778.5 million km",
    moons: "95+",
    diameter: "139,820 km",
    day: "10 hours",
    fact: "Largest planet in the Solar System.",
  },

  saturn: {
    name: "Saturn",
    image: "./img/saturn.webp",
    distance: "1.43 billion km",
    moons: "140+",
    diameter: "116,460 km",
    day: "10.7 hours",
    fact: "Famous for its spectacular rings.",
  },

  uranus: {
    name: "Uranus",
    image: "./img/uranus.webp",
    distance: "2.87 billion km",
    moons: "27",
    diameter: "50,724 km",
    day: "17 hours",
    fact: "Rotates on its side.",
  },

  neptune: {
    name: "Neptune",
    image: "./img/neptune.webp",
    distance: "4.5 billion km",
    moons: "14",
    diameter: "49,244 km",
    day: "16 hours",
    fact: "Has the fastest winds in the Solar System.",
  },
};
