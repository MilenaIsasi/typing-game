// dentro del script.js
// todas nuestros textos de ejemplo
const textos = [
  'Olimpia campeon',
  'Programando Paraguay',
  'Aprendiendo a programar',
  'proyecto de Typing game',
];
// almacena la lista de palabras y el índice de la palabra que el jugador está escribiendo actualmente
let palabras = [];
let palabraIndice = 0;
// la hora de inicio
let startTime = Date.now();
// elementos de la pagina
const textoElemento = document.getElementById('quote');
const messageElement = document.getElementById('message'); 
const typedValueElement = document.getElementById('texto-tipeado');

// en el final de nuestro archivo script.js
document.getElementById('inicio').addEventListener('click', () => { //llama al ID del html que esta en button, se le agrega un evento que es escuchar click
  // elegimos el texto de ejemplo a mostrar
  const textoIndice = Math.floor(Math.random() * textos.length); //creamos una constante del textoIndice, aplicamos una funcion matematica para elegir una de esas funciones
  const texto = textos[textoIndice]; 
  // separamos el texto en un array de palabras
  palabras = texto.split(' '); //metodo split separa (' ') las oraciones en palabras
  // reestablemos el idice de palabras para el seguimiento
  palabraIndice = 0; //inicializamos el indice de la palabra en cero

  // Actualizamos la interfaz de usuario
  // Creamos una matriz con los elementos span de nuestro HTML para poder definirles una class
  const spanPalabras = palabras.map(function(palabra) { return `<span>${palabra} </span>`}); //creamos la constante palabra, span es una etiqueta html, dentro de esa etiqueta cargue los datos de esa funcion
  // Convertimos a string y lo definimos como innerHTML en el texto de ejemplo a mostrar
  textoElemento.innerHTML = spanPalabras.join(''); //join es un metodo que lo que hace es agregar mas valores
  // Resaltamos la primer palabra
  textoElemento.childNodes[0].className = 'highlight'; //aplicamos la clase classname, esta en el CSS
  // Borramos los mensajes previos
  messageElement.innerText = ''; 

  // Definimos el elemento textbox
  // Vaciamos el elemento textbox
  typedValueElement.value = '';
  // Definimos el foco en el elemento
  typedValueElement.focus(); 
  // Establecemos el manejador de eventos

  // Iniciamos el contador de tiempo
  startTime = new Date().getTime(); //a la varibales startime le cargamos la hora exacta que inicia al tocar el boton inicio
});

// al final de nuestro archivo script.js
typedValueElement.addEventListener('input', () => { //al elemento input le agregamos la funcionalidad, input es agregar algun texto
  // tomamos la palabra actual
  const currentWord = palabras[palabraIndice]; //creamos constante currentWord, que sig palabra actual
  // tomamos el valor actual
  const typedValue = typedValueElement.value; //creamos constante typedvalue, valuamos lo que el usuario ingresa
  if (typedValue === currentWord && palabraIndice === palabras.length - 1) { //=== hace que sea totalmente igual lo que escribimos de lo que indica el texto.  SI LA PALABRA QUE ESCRIBIMOS ES IGUAL A LA PALABRA QUE APARECE Y A LA PALABRA IGUAL
    // fin de la sentencia


    // Definimos el mensaje de éxito
    const elapsedTime = new Date().getTime() - startTime; //CALCULA EL TIEMPO
    const message = `FELICITACIONES! Finalizaste en ${elapsedTime / 1000} segundos.`; //CREAMOS EL MENSAJE FINAL
    messageElement.innerText = message; // UNA VEZ QUE GENERA EL TEXTO GUARDA EN EL MENSAJE 
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) { // SINO, SI EL CARACTER QUE SE TIPEO AL FINAL ES ESPACIO EN BLANCO Y LA PALABRA SIN ESPACIO ES IGUAL A LA PALABRA ACTUAL
    // fin de la palabra
    // vaciamos el valor typedValueElement para la siguiente palabra
    typedValueElement.value = '';
    // movemos a la palabra siguiente
    palabraIndice++;
    // reiniciamos el estado de todas las clases para los textos
    for (const palabraElemento of textoElemento.childNodes) {
      palabraElemento.className = '';
    }
    // resaltamos la palabra actual
    textoElemento.childNodes[palabraIndice].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // correcta actual
    // resaltar la siguiente palabra
    typedValueElement.className = '';
  } else {
    // estado error
    typedValueElement.className = 'error'; 
  }
});

