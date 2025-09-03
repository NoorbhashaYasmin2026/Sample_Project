const garden = document.getElementById("garden");

function plantFlower(mood) {
  const x = Math.random() * (garden.offsetWidth - 60);
  const y = Math.random() * (garden.offsetHeight - 60);

  createFlower(mood, x, y);
}

function createFlower(mood, x, y) {
  const flower = document.createElement("div");
  flower.classList.add("flower", mood);
  flower.style.left = `${x}px`;
  flower.style.top = `${y}px`;

  // Add petals
  for (let i = 0; i < 6; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.transform = `rotate(${i * 60}deg) translateY(-15px)`;
    flower.appendChild(petal);
  }

  // Add center
  const center = document.createElement("div");
  center.classList.add("center");
  flower.appendChild(center);

  garden.appendChild(flower);
}

function resetGarden() {
  garden.innerHTML = ""; // clear flowers visually
}
