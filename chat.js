const container = document.querySelector('.tulipa-container');
const elementosAnimados = container.querySelectorAll('.petala, .flor-topo, .baseflor, .caule-superior');

let aberta = false;
let timeoutId = null;

container.addEventListener('click', () => {
  if (!aberta) {
    // Pausar vento (definindo uma iteração única)
    elementosAnimados.forEach(el => {
      el.style.animationIterationCount = '1';
    });

    // Esperar todos os elementos terminarem a animação
    let restantes = elementosAnimados.length;

    const handleAnimationEnd = (event) => {
      restantes--;
      event.target.removeEventListener('animationend', handleAnimationEnd);

      if (restantes === 0) {
        // Abrir pétalas após todas animações de vento acabarem
        container.querySelector('.petala-left').classList.add('abrir');
        container.querySelector('.petala-right').classList.add('abrir');
        container.querySelector('.petala-center').classList.add('abrir');

        aberta = true;

        timeoutId = setTimeout(() => {
          fecharPetalas();
        }, 5000);
      }
    };

    elementosAnimados.forEach(el => {
      el.addEventListener('animationend', handleAnimationEnd);
    });

  } else {
    // Fechar manualmente se clicar novamente
    clearTimeout(timeoutId);
    fecharPetalas();
  }
});

function fecharPetalas() {
  // Fechar pétalas
  container.querySelector('.petala-left').classList.remove('abrir');
  container.querySelector('.petala-right').classList.remove('abrir');
  container.querySelector('.petala-center').classList.remove('abrir');

  // Reiniciar vento
  elementosAnimados.forEach(el => {
    el.style.animationIterationCount = 'infinite';
    el.style.animation = 'none';
    void el.offsetWidth; // Força reflow
    el.style.animation = null;
  });

  aberta = false;
}
