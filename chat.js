document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 15; i++) {
    const container = document.querySelector(`.tulipa-container${i}`);
    if (!container) continue;

    const elementosAnimados = container.querySelectorAll('.petala, .flor-topo, .baseflor, .caule-superior');
    let aberta = false;
    let timeoutId = null;

    container.addEventListener('click', () => {
      if (!aberta) {
        // Abre as pétalas imediatamente, sem pausar animação
        container.querySelector('.petala-left')?.classList.add('abrir');
        container.querySelector('.petala-right')?.classList.add('abrir');
        container.querySelector('.petala-center')?.classList.add('abrir');

        aberta = true;

        timeoutId = setTimeout(() => {
          fecharPetalas();
        }, 5000);
      } else {
        // Fechar manualmente se clicar novamente
        clearTimeout(timeoutId);
        fecharPetalas();
      }
    });

    function fecharPetalas() {
      // Fechar pétalas
      container.querySelector('.petala-left')?.classList.remove('abrir');
      container.querySelector('.petala-right')?.classList.remove('abrir');
      container.querySelector('.petala-center')?.classList.remove('abrir');

      // Reiniciar vento
      elementosAnimados.forEach(el => {
        el.style.animationIterationCount = 'infinite';
        el.style.animation = 'none';
        void el.offsetWidth; // Força reflow
        el.style.animation = null;
      });

      aberta = false;
    }
  }
});
