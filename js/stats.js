
async function getData() {
  try { //Intento
    const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing'); //declaro la constante response
    //esta costante equivale a contactar a dicha api
    const data = await response.json();  //la constante data equivale al json de respuesta de la api
    codigoFuncional(data); //uso mi funcion que contiene el codigo anterior, y le paso el parametro (json de respuesta de la API)
  } catch(error) { //Si hay un error, muestro error en consola
    console.log('Te falla, solucionalo asi no te hacen bullying!!', error);
  }
}


getData();







function codigoFuncional(data) {

//Decidi resolverlo en 3 partes para evitar continuar perdiendome. Luego, recopilo cada parte en una funcion y la ejecuto
  function eventsStatistics(){

    // Declaro los primeros 2 arrays, los cuales contienen:
  let eventsAssistancePercentage = []; //Nombre y %asistencia de cada evento 
  let eventsCapacity = []; //Nombre y %asistencia de cada evento


  // En este for genero los arrays necesarios para la primer parte
  for (let event of data.events) {  
    let eventName = event.name;
    let eventAssistance = (event.assistance / event.capacity) * 100;
    eventsAssistancePercentage.push({ eventName, eventAssistance });
//Lo que hice fue declarar variables a las que les asigno como valor tanto el nombre como un calculo para el %asistencia
//Luego de tener ambas, hago un push hacia el primer array que declare en la funcion


    let eventCapacity = event.capacity;
    eventsCapacity.push({ eventName, eventCapacity });
//En el mismo for, aprovecho que ya tengo el nombre como variable, solo obtengo el valor de la capacidad
//Y genero el segundo array, que contiene nombre y capacidad de cada evento
  }


  // Luego declaro los otros 3, cuyos valores provienen de haber ordenado los arrays anteriores
  // Estos provienen de ordenar los anteriores. Utilizo SORT para ordenarlos segun lo necesito
  let eventsWithHighestAssistance = [...eventsAssistancePercentage].sort((a, b) => b['eventAssistance'] - a['eventAssistance']); //Mayor a menor
  let eventsWithLowestAssistance = [...eventsAssistancePercentage].sort((a, b) => a['eventAssistance'] - b['eventAssistance']); //Menor a mayor
  let eventsWithLargerCapacity = eventsCapacity.sort((a, b) => b['eventCapacity'] - a['eventCapacity']);


// Ahora genero las filas de la tabla usando los arrays ya ordenados. Hago un TOP 3
let eventsStatisticsTable = document.getElementById("events_statistics_tbody") //llamo la tbody correspondiente a Events Statistics de mi table
//Como quiero un top 5, hago un for de 3 iteraciones. Si quiero mas, cambio el valor que cierra el for. 
  for (let i = 0; i < 5; i++) {
  

    //creo una table row y sus correspondientes table data.
    //El primer td corresponde a la columna de mayor %asistencia
    //El segundo td corresponde a la columna de menor %asistencia
    //El tercer td corresponde a la columna de evento con mayor capacidad
    let fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${eventsWithHighestAssistance[i].eventName}: ${eventsWithHighestAssistance[i].eventAssistance}%</td>
      <td>${eventsWithLowestAssistance[i].eventName}:${eventsWithLowestAssistance[i].eventAssistance}%</td>
      <td>${eventsWithLargerCapacity[i].eventName}:${eventsWithLargerCapacity[i].eventCapacity}</td>
    `;
    //Utilizo los arrays que obtuve de ordenar mis 2 primeros arrays de la funcion, y uso el i para obtener los valores de la misma posicion
    //en cada uno de ellos
  
    eventsStatisticsTable.appendChild(fila);
    //Sumo el contenido del tbody y se lo mando a su respectivo contenedor identificado como events_statistics_tbody
  }
  }
eventsStatistics(); //Llamo a la funcion 



function upcomingEventsStatistics(){

  //Esta funcion es muy similar a la siguiente para los eventos pasados, solo cambia el if, y Upcoming cambia por Past, para mantener 
  //la estructura
 
  


//Declaro un array que va a contener la categoria, las ganancias estimadas y la asistencia estimada
  let UpcomingCategories = []; 

  for(let event of data.events){

    if (event.date >= (data.currentDate)){

      UpcomingCategory = event.category;
      UpcomingRevenues = (event.price * event.estimate);
      UpcomingAttendance = (event.estimate / event.capacity )*100;

     UpcomingCategories.push({UpcomingCategory , UpcomingRevenues, UpcomingAttendance});
     //Luego de iterar los eventos con una fecha mayor a la actual, es decir, eventos futuros, hago un push al array que declare antes
     // Mas adelante, voy a filtar este array para sumar los valores de las ganancias estimadas de cada categoria
     //y un promedio de la asistencia

  
  }
  
}


//Explicacion detallada de esta parte del codigo

/*
Este código es una función de reducción en JavaScript. La función reduce() se utiliza para reducir los elementos de un array a un solo valor.
 En este caso, la función reduce() se utiliza para reducir los elementos de UpcomingCategories a un solo valor.
  La función reduce() toma dos argumentos: el primero es una función de devolución de llamada que se ejecuta en cada elemento del array, 
  y el segundo es el valor inicial. En este caso, el valor inicial es un array vacío. La función de devolución de llamada
   toma dos argumentos: el acumulador y el valor actual. El acumulador es el valor devuelto por la función de devolución de llamada 
   en la iteración anterior, y el valor actual es el valor actual del array. La función de devolución de llamada devuelve un valor 
   que se convierte en el acumulador para la siguiente iteración. En este caso, la función de devolución de llamada comprueba 
   si el UpcomingCategory ya está en el array. Si no está en el array, se agrega al array con UpcomingRevenues, UpcomingAttendance y count 
   establecidos en los valores de event. Si ya está en el array, se actualizan los valores de UpcomingRevenues, UpcomingAttendance y count.
    Al final, la función reduce() devuelve el array acumulado

*/
const UpcomingCategoriesTotales = UpcomingCategories.reduce((acc, event) => {
  const index = acc.findIndex((item) => item.UpcomingCategory === event.UpcomingCategory);
  if (index === -1) {
    acc.push({
      UpcomingCategory: event.UpcomingCategory,
      UpcomingRevenues: event.UpcomingRevenues,
      UpcomingAttendance: event.UpcomingAttendance,
      count: 1,
    });
  } else {
    acc[index].UpcomingRevenues += event.UpcomingRevenues;
    acc[index].UpcomingAttendance += event.UpcomingAttendance;
    acc[index].count += 1;
  }
  return acc;
}, []);

UpcomingCategoriesTotales.forEach((item) => {
  item.UpcomingAttendance /= item.count;
});




//Ordeno por las ganancias estimadas de cada categoria, de mayor a menor
const UpcomingCategoriesTotalesOrdenado = UpcomingCategoriesTotales.sort((a, b) => b.UpcomingRevenues - a.UpcomingRevenues);

console.log(UpcomingCategoriesTotalesOrdenado);


let UpcomingEventsStatisticsTable = document.getElementById("upcoming_statistics_tbody");
  for (let i = 0; i < 6; i++) { //TOP 6 CATEGORIES
  

    //creo una table row y sus correspondientes table data.
    //El primer td corresponde a la columna de mayor %asistencia
    //El segundo td corresponde a la columna de menor %asistencia
    //El tercer td corresponde a la columna de evento con mayor capacidad
    let fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${UpcomingCategoriesTotalesOrdenado[i].UpcomingCategory}</td>
      <td>${UpcomingCategoriesTotalesOrdenado[i].UpcomingRevenues}</td>
      <td>${UpcomingCategoriesTotalesOrdenado[i].UpcomingAttendance}%</td>
    `;
    //Utilizo los arrays que obtuve de ordenar mis 2 primeros arrays de la funcion, y uso el i para obtener los valores de la misma posicion
    //en cada uno de ellos
  
   UpcomingEventsStatisticsTable.appendChild(fila);
    //Sumo el contenido del tbody y se lo mando a su respectivo contenedor
  }





}//Llave upcomingEventsStatistics
upcomingEventsStatistics();



function pastEventsStatistics(){
 
  console.log("pastEventsStatistics function console log");

  let PastCategories = []; 

  for(let event of data.events){

    if (event.date < data.currentDate){

     let PastCategory = event.category;
      let PastRevenues = (event.price * event.assistance  );
      let PastAttendance = (event.assistance / event.capacity )*100;

     PastCategories.push({PastCategory , PastRevenues, PastAttendance});

  
  }
  
}

console.log(PastCategories);

const PastCategoriesTotales = PastCategories.reduce((acc, event) => {
  const index = acc.findIndex((item) => item.PastCategory === event.PastCategory);
  if (index === -1) {
    acc.push({
      PastCategory: event.PastCategory,
      PastRevenues: event.PastRevenues,
      PastAttendance: event.PastAttendance,
      count: 1,
    });
  } else {
    acc[index].PastRevenues += event.PastRevenues;
    acc[index].PastAttendance += event.PastAttendance;
    acc[index].count += 1;
  }
  return acc;
}, []);

PastCategoriesTotales.forEach((item) => {
  item.PastAttendance /= item.count;
});

console.log(PastCategoriesTotales);

const PastCategoriesTotalesOrdenado = PastCategoriesTotales.sort((a, b) => b.PastRevenues - a.PastRevenues);

console.log(PastCategoriesTotalesOrdenado);


let PastEventsStatisticsTable = document.getElementById("past_statistics_tbody");
  for (let i = 0; i < 6; i++) { //TOP 6 CATEGORIES
  

    //creo una table row y sus correspondientes table data.
    //El primer td corresponde a la columna de mayor %asistencia
    //El segundo td corresponde a la columna de menor %asistencia
    //El tercer td corresponde a la columna de evento con mayor capacidad
    let fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${PastCategoriesTotalesOrdenado[i].PastCategory}</td>
      <td>${PastCategoriesTotalesOrdenado[i].PastRevenues}</td>
      <td>${PastCategoriesTotalesOrdenado[i].PastAttendance}%</td>
    `;
    //Utilizo los arrays que obtuve de ordenar mis 2 primeros arrays de la funcion, y uso el i para obtener los valores de la misma posicion
    //en cada uno de ellos
  
   PastEventsStatisticsTable.appendChild(fila);
    //Sumo el contenido del tbody y se lo mando a su respectivo contenedor identificado como events_statistics_tbody
  }

}

pastEventsStatistics();
} //Llave codigoFuncional()