fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(data => {
    const capacities = data.events.map(event => event.capacity);
    const totalCapacity = capacities.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(totalCapacity);
  })





  .catch(error => console.error(error));
