document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 15; i++) {
    const container = document.querySelector(`.tulipa-container${i}`);
    if (!container) continue;

    let aberta = false;
    let timeoutId = null;

    container.addEventListener('click', () => {
      if (!aberta) {
        // Abre as pétalas imediatamente
        container.querySelector('.petala-left')?.classList.add('abrir');
        container.querySelector('.petala-right')?.classList.add('abrir');
        container.querySelector('.petala-center')?.classList.add('abrir');

        aberta = true;
        }
      }
    );
  }
});
