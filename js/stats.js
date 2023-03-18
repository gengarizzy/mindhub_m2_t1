
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


//Como quiero un top 3, hago un for de 3 iteraciones. Si quiero mas, cambio el valor que cierra el for. 
  for (let i = 0; i < 3; i++) {
  

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



  

  
}