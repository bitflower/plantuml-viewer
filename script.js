function renderUML() {
  const input = document.getElementById('umlInput').value;
  const encoded = plantumlEncoder.encode(input);

  const baseUrl = 'http://localhost:8080/plantuml/svg/';
  const imageUrl = baseUrl + encoded;

  document.getElementById('umlImage').src = imageUrl;
}
