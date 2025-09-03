const garden = document.getElementById("garden");

// Load saved flowers
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem("garden")) || [];
  saved.forEach(flower => createFlower(flower.mood, flower.x, flower.y));
};

function plantFlower(mood) {
  const x = Math.random() * (garden.offsetWidth - 50);
  const y = Math.random() * (garden.offsetHeight - 50);

  createFlower(mood, x, y);

  // Save to localStorage
  const saved = JSON.parse(localStorage.getItem("garden")) || [];
  saved.push({ mood, x, y });
  localStorage.setItem("garden", JSON.stringify(saved));
}

function createFlower(mood, x, y) {
  const flower = document.createElement("div");
  flower.classList.add("flower", mood);
  flower.style.left = `${x}px`;
  flower.style.top = `${y}px`;

  garden.appendChild(flower);
}
