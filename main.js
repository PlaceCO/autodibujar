//Variables
let precolor = prompt('Escribe un color'); //Prompt para seleccionar el color para dibujar
//Mapeado de los colores (actualmente 16 colores)
// Mapeado de los colores (actualmente 16 colores)
const colores = `{
 "rojo": 1,
 "naranja": 2,
 "amarillo": 3,
 "verde oscuro": 4,
 "verde claro": 5,
 "azul oscuro": 6,
 "azul": 7,
 "azul claro": 8,
 "purpura oscuro": 9,
 "morado oscuro": 9,
 "purpura": 10,
 "morado": 10,
 "rosa claro": 11,
 "rosa": 11,
 "marrón": 12,
 "marron": 12,
 "café": 12,
 "cafe": 12,
 "negro": 13,
 "gris": 14,
 "gris claro": 15,
 "blanco": 16
}`;

let colortradc0 = JSON.parse(colores);
let colortradc1 = precolor.toLowerCase();
let color = colortraduc0[colortradc1];
//Coordenadas X (Horizontal)
let xmin = prompt('Escribe la coordenada X (horizontal) mínima para dibujar'); // Minimo 0
let xmax = prompt('Escribe la coordenada X (horizontal) máxima para dibujar'); // Máximo 999 (tamaño actual máximo del mapa)
//Coordenadas Y (Vertical)
let ymin = prompt('Escribe la coordenada Y (vertical) mínima para dibujar'); // Mínimo 0
let ymax = prompt('Escribe la coordenada Y (vertical) máxima para dibujar'); // Máximo 999
 
let modhash;

if(color !=undefined || color > 16) {
 if(xmin > 0 && xmax < 999 && ymin > 0 && xmax < 499) {
  function sleep (delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}
 
async function drawWhenReady() {
  while (document.getElementById("place-timer").style.display != "none") {
    console.log("Error: No se pudo dibujar, por esperando 15 segundos más.");
    await sleep(15000);
  }
  console.log("DEBUG: ya se puede dibujar.");
  drawRandomPixel();
}
 
async function drawRandomPixel() {
  var x = Math.floor(Math.random()*(1+xmax-xmin)+xmin);
  var y = Math.floor(Math.random()*(1+ymax-ymin)+ymin);
  $.ajax({
    url: "https://www.reddit.com/api/place/draw.json",
    type: "POST",
    headers: {
      "x-requested-with" : "XMLHttpRequest",
      "x-modhash"        : modhash,
    },
    data: { x: x, y: y, color: color }
  });
  console.log("Drew pixel at (" + x + "," + y + ")");
  await sleep(300 * 1000 + 1400);
  location.reload();
}
 
function init() {
  modhash = document.getElementById("config").innerHTML.match(/"modhash": "(\w+)"/)[1];
  drawWhenReady();
}
 
setTimeout(init, 1500);
 }
 else {
  console.log("ERROR: coordenadas inválidas.");
 }
} else {
 console.log("ERROR: color inválido.");
}

