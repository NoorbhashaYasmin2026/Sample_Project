const garden = document.getElementById("garden");

function plantEmoji(symbol) {
  const x = Math.random() * (garden.offsetWidth - 50);
  const y = Math.random() * (garden.offsetHeight - 50);

  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.textContent = symbol;
  emoji.style.left = `${x}px`;
  emoji.style.top = `${y}px`;

  garden.appendChild(emoji);
}

function resetGarden() {
  garden.innerHTML = ""; // clears all emojis
}
