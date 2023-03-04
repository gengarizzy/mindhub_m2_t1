//Obtengo lor valores que le mande a mi card al momento de crearla (tiene parametros, que no estan visibles)
const urlParams = new URLSearchParams(window.location.search);
const event = {
  category: urlParams.get('category'),
  image: urlParams.get('image'),
  name: urlParams.get('name'),
  date: urlParams.get('date'),
  place: urlParams.get('place'),
  description: urlParams.get('description'),
  price: urlParams.get('price')
};







// Usa los valores de event para mostrar la información en la página
document.getElementById('details_img').innerHTML = `
  <img src="${event.image}" alt="details image">
`;
document.getElementById('details_info').innerHTML = `
  <h3>${event.name}</h3>
  <h6>${event.date}</h6>
  <h6>${event.place}</h6>
  <h6>${event.description}</h6>
`;