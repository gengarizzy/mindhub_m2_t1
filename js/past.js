
import data from './data.js';

// ME PASE LOS DATOS DEL DATA.JS QUE NOS ENTREGARON, PUSE currentDate como un String, events como un Array
// Luego hago una variable para identificar al contenedor de las cards de mi html un getElementById
// De ahi, genero una variable card para crear un div, al cual le asigno la clase deseada y con innerHTML le pongo el contenido
// Para rellenar los datos que me piden, por cada event de events, uso cada valor event.valor



let eventContainer = document.getElementById("cards-row");

for(let event of data.events){

  if (event.date < (data.currentDate)){
    let card = document.createElement("div");
   
    
    card.innerHTML = `

        <div class="card h-100" data-category="${event.category}">
            <img src="${event.image}" class="card-img-top" alt="..."></img>
            <div class="card-body text-center">
                <h3 class="card-title">${event.name}</h3>
                <p class="card-text">${event.description}</p>
                <div class="card_bottom">
                    <h5>Price: $ ${event.price}</h5>
                    <button onclick="window.location.href='./details.html';" class="card_bottom_button">
                        Ver mas
                    </button>
                </div>
            </div>
        </div>
    `;



eventContainer.appendChild(card); //Luego de generar toda la variable card, con appendChild se la sumo al div de id #cards-row que 
//tengo como contenedor principal de las cards
}
}


//CHECKBOXES GENERADOS

let checkboxContainer = document.getElementById("ul_navbar"); //Selecciono mi contenedor de checkbox, el cual es un UL
let uniqueCategories = []; // Array para almacenar las categorías únicas, el cual va a pasar por un filtro con un IF
//Para tomar todas las categorias sin que se repitan


for(let event of data.events) { //recorro cada evento del array events, perteneciente a mi variable data (que contiene el data.js)
  if(!uniqueCategories.includes(event.category)) { // Verifica si la categoría ya está presente en el array
    // Si el array uniqueCategories (no) tiene la categoria que obtuvimso de event, se agrega al mismo.
    uniqueCategories.push(event.category); // Agrega la categoría al final del array, si se cumplio la condicion anterior



    //Creo una variable llamada checkbox, la cual va a generar un elemento de tipo LI (dentro del UL seleccionado que tiene
    //la variable de checkboxContainer, con la clase nav-item y el contenido especificado en innerHTML)
    let checkbox = document.createElement("li");
    checkbox.className = "nav-item";
    checkbox.innerHTML = `
      <label>
        <input type="checkbox" value="${event.category}"><span>${event.category}</span> 
      </label> 
    `; //al input de tipo checkbox le asigno como value la categoria del evento iterado, para poder filtarlos posteriormente
    //con los checkboxes seleccionados y la barra de busqueda
    checkboxContainer.appendChild(checkbox); // Por ultimo, a lo que acabo de crear en la variable checkBox, se lo mando al checkboxContainer
  }
}












//Barra de busqueda + categorias funcionando
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const cards = document.querySelectorAll(".card");
const messageContainer = document.getElementById("message-container");

function buscarYFiltrar() {
  const searchTerm = searchInput.value.toLowerCase();
  let selectedCategories = [];
  
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      selectedCategories.push(checkbox.value);
    }
  }

  let visibleCards = 0;
  for (let card of cards) {
    const cardName = card.getElementsByTagName('h3')[0].innerText.toLowerCase();
    const cardDescription = card.getElementsByTagName('p')[0].innerText.toLowerCase();
    const cardCategories = card.dataset.category.split(" ");
    let showCard = true;

    if (searchTerm !== '' && !cardName.includes(searchTerm) && !cardDescription.includes(searchTerm)) {
      showCard = false;
    }

    for (let category of cardCategories) {
      if (selectedCategories.length > 0 && !selectedCategories.includes(category)) {
        showCard = false;
        break;
      }
    }
    card.style.display = showCard ? 'block' : 'none';
    if (showCard) {
      visibleCards++;
    }
  }

  if (visibleCards === 0) {
    messageContainer.innerHTML = 'No se encontraron resultados. Por favor, busca de nuevo.';
  } else {
    messageContainer.innerHTML = '';
  }
}

searchInput.addEventListener('input', buscarYFiltrar);

for (let checkbox of checkboxes) {
  checkbox.addEventListener("change", buscarYFiltrar);
}
