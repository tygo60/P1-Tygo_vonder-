// Variabelen

let x = 100;
let greeting = "Hello World!";
let a = 20;
let b = 10;
let optellen = a + b;
let aftrekken = a - b;
let vermenigvuldigen = a * b;
let delen = a / b;


function setup() {

  createCanvas(600, 600);

}


function draw() {

  background(220);

  // x
  text(x, 20, 20);

  // Tekst
  text(greeting, 20, 60);

  // y
  let y = 80;

  text("Optellen: " + optellen, 20, y);

  y = y + 20;

  text("Aftrekken: " + aftrekken, 20, y);

  y = y + 20;

  text("Vermenigvuldigen: " + vermenigvuldigen, 20, y);

  y = y + 20;

  text("Delen: " + delen, 20, y);

}