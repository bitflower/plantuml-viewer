let debounceTimer;

function renderUML() {
  const input = document.getElementById('umlInput').value;
  const encoded = plantumlEncoder.encode(input);
  const imageUrl = `/uml/${encoded}`; // or use direct PlantUML server

  fetch(imageUrl)
    .then((res) => (res.ok ? res.text() : Promise.reject('Failed to fetch')))
    .then((svg) => {
      const container = document.getElementById('umlContainer');
      container.innerHTML = svg;

      // ✅ REATTACH CLICK HANDLER HERE
      const containerElement = container.querySelector(
        '#entity_containerAlias'
      );
      if (containerElement) {
        containerElement.style.cursor = 'pointer';
        containerElement.addEventListener('click', () => {
          alert('You clicked the container!');
        });
      }
    })
    .catch((err) => {
      document.getElementById(
        'umlContainer'
      ).innerHTML = `<pre style="color:red;">${err}</pre>`;
    });
}

// ✅ Add live preview on typing with debounce
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('umlInput');
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      renderUML();
    }, 500); // adjust delay as needed
  });

  // Initial render
  renderUML();
});
