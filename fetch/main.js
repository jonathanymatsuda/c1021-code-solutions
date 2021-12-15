fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/lucario')
  .then(response => response.json())
  .then(pokemon => console.log(pokemon));
