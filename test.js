const fetch = require('node-fetch'); // Importando node-fetch versão 2

// Exemplo: Fazendo uma requisição para testar
fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=111a2ec6bf8e65a8f75aa761051fc96c')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Dados retornados:', data); // Resultado da API
  })
  .catch(error => {
    console.error('Erro:', error.message);
  });
