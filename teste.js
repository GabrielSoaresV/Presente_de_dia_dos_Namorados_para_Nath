onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const garden = document.querySelector('.garden');

function createFlower(x, y, scale = 1) {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.position = 'absolute';
  flower.style.left = `${x}vmin`;
  flower.style.bottom = `${y}vmin`;
  flower.style.transform = `scale(${scale})`;

  flower.innerHTML = `
    <div class="flower__g-long"></div>
    <div class="flower__g-right"></div>
    <div class="flower__g-front"></div>
  `;

  garden.appendChild(flower);
}

// criar 10 flores em posições aleatórias
for(let i = 0; i < 10; i++) {
  let x = Math.random() * 90; // entre 0 e 90 vmin
  let y = Math.random() * 20 + 5; // entre 5 e 25 vmin de bottom
  let scale = 0.7 + Math.random() * 0.6; // escala entre 0.7 e 1.3
  createFlower(x, y, scale);
}
