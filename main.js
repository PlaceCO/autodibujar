//Variables
let color=13; //Colores en 8 bits
//Coordenadas X (Horizontal)
let xmin =750; // Minimo 0
let xmax =999; // Máximo 999 (tamaño actual máximo del mapa)
//Coordenadas Y (Vertical)
let ymin =750; // Mínimo 0
let ymax =999; // Máximo 999
 
let modhash;
 
function sleep (delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}
 
async function drawWhenReady() {
  while (document.getElementById("place-timer").style.display != "none") {
    console.log("Error: No se pudo dibujar, por esperando 15 segundos más.");
    await sleep(15000);
  }
  console.log("We can draw now!");
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
