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


  <img id="details_imagen" src="${event.image}" alt="details image">
  
`;
document.getElementById('details_info').innerHTML = `
  <h2>${event.name}</h2>
  <h3>${event.date}</h3>
  <h4>${event.place}</h4>
  <h6>${event.description}</h6>
`;