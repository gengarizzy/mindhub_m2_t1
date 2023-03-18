let data;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    // Aquí puedes hacer lo que necesites con la variable "data"
  })
  .catch(error => console.error(error));
