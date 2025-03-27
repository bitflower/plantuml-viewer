const express = require('express');
const request = require('request');
const app = express();

app.use(express.static('public')); // serves index.html and script.js from ./public

app.get('/uml/:encoded', (req, res) => {
  const encoded = req.params.encoded;
  const url = `http://localhost:8080/plantuml/svg/${encoded}`;
  request(url).pipe(res); // stream PlantUML image to client
});

app.listen(3000, () =>
  console.log('Frontend + proxy running at http://localhost:3000')
);
