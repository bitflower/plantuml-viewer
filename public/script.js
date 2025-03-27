// function renderUML() {
//   const input = document.getElementById('umlInput').value;
//   const encoded = plantumlEncoder.encode(input);

//   console.log('Encoded:', encoded);

//   const baseUrl = 'http://localhost:8080/plantuml/svg/';
//   // const imageUrl = baseUrl + encoded;
//   const imageUrl = `/uml/${encoded}`;

//   document.getElementById('umlImage').src = imageUrl;
// }

async function renderUML() {
  const input = document.getElementById('umlInput').value;
  const encoded = plantumlEncoder.encode(input);
  const imageUrl = `/uml/${encoded}`; // or 'http://localhost:8080/svg/' + encoded

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error('Failed to load SVG');

    const svgText = await response.text();
    document.getElementById('umlContainer').innerHTML = svgText;
  } catch (error) {
    console.error('Error rendering diagram:', error);
    document.getElementById(
      'umlContainer'
    ).innerHTML = `<p style="color:red;">Error loading diagram</p>`;
  }

  const container = document.querySelector('#entity_containerAlias');
  if (container) {
    container.style.cursor = 'pointer';
    container.addEventListener('click', () => {
      alert('Container clicked!');
    });
  }
}
