
import data from './data.js';

// ME PASE LOS DATOS DEL DATA.JS QUE NOS ENTREGARON, PUSE currentDate como un String, events como un Array
// Luego hago una variable para identificar al contenedor de las cards de mi html un getElementById
// De ahi, genero una variable card para crear un div, al cual le asigno la clase deseada y con innerHTML le pongo el contenido
// Para rellenar los datos que me piden, por cada event de events, uso cada valor event.valor



let eventContainer = document.getElementById("cards-row");

for(let event of data.events){

  if (event.date >= (data.currentDate)){
    let card = document.createElement("div");
card.className = "col";
card.innerHTML = `

    <div class="card h-100">
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
