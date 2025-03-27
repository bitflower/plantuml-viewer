function renderUML() {
  const input = document.getElementById('umlInput').value;
  const encoded = plantumlEncoder.encode(input);

  console.log('Encoded:', encoded);

  const baseUrl = 'http://localhost:8080/plantuml/svg/';
  // const imageUrl = baseUrl + encoded;
  const imageUrl = `/uml/${encoded}`;

  document.getElementById('umlImage').src = imageUrl;
}
