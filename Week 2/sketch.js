let linker_wiel = 300;
let rechter_wiel = 420;
let auto_onderkant = 260;
let auto_bovenkant = 300;

let zon_binnenkant = 180;
let zon_buitenkant = 180;

let wolk_links1 = 220;
let wolk_links2 = 280;
let wolk_links3 = 340;
let wolk_links4 = 290;

let wolkwit_links1 = 220;
let wolkwit_links2 = 280;
let wolkwit_links3 = 340;
let wolkwit_links4 = 290;

let wolk_rechts1 = 600;
let wolk_rechts2 = 610;
let wolk_rechts3 = 670;
let wolk_rechts4 = 620;

let wolkwit_rechts1 = 560;
let wolkwit_rechts2 = 610;
let wolkwit_rechts3 = 670;
let wolkwit_rechts4 = 620;


function setup() {
  createCanvas(800, 600);

  
}

function draw() {
  background("#88CEEB");
  noStroke();

  // Bergen

  fill("#3e3e3e");
  triangle(280, 480, 500, 225, 720, 480);

  fill("#666666");
  triangle(80, 480, 260, 315, 440, 480);

  fill("#666666");
  triangle(540, 480, 700, 300, 860, 480);

  // Gras

  fill("#004000");
  rect(0, 480, 800, 7);

  fill("#009d00");
  rect(0, 487, 800, 15);

  // Weg

  fill("#8c8a8a");
  rect(0, 502, 800, 98);

  // Wegmarkeringen

  fill("lightgrey");
  rect(40, 548, 120, 15, 10);
  rect(240, 548, 120, 15, 10);
  rect(440, 548, 120, 15, 10);
  rect(640, 548, 120, 15, 10);

  // Verkeerslicht

  fill("#3e3e3e");
  rect(680, 345, 20, 150, 10);

  fill("#3e3e3e");
  rect(660, 330, 60, 90);

  fill("#3F0000");
  circle(690, 345, 24);

  fill("#402100");
  circle(690, 375, 24);

  fill("#00FF01");
  circle(690, 405, 24);

  // Boom 1

  fill("#512a03");
  rect(40, 390, 24, 90);

  fill("#287A18");
  circle(50, 360, 75);

  fill("#17460e");
  circle(40, 360, 75);

  // Boom 2

  fill("#512a03");
  rect(200, 390, 24, 90);

  fill("#287A18");
  circle(210, 360, 75);

  fill("#17460e");
  circle(200, 360, 75);

  // Boom 3

  fill("#512a03");
  rect(360, 390, 24, 90);

  fill("#287A18");
  circle(370, 360, 75);

  fill("#17460e");
  circle(360, 360, 75);

  // Zon

  fill(181, 178, 149, 100);
  circle(zon_binnenkant, 75, 120);

  fill("yellow");
  circle(zon_buitenkant, 75, 75);

  // Wolk

  fill("lightgrey");
  circle(wolk_links1, 135, 68);
  circle(wolk_links2, 120, 83);
  circle(wolk_links3, 135, 68);
  circle(wolk_links4, 157, 90);

  fill("white");
  circle(wolkwit_links1, 127, 60);
  circle(wolkwit_links2, 112, 75);
  circle(wolkwit_links3, 127, 60);
  circle(wolkwit_links4, 150, 83);

  // Tweede wolk

  fill("lightgrey");
  circle(wolk_rechts1, 150, 60);
  circle(wolk_rechts2, 135, 75);
  circle(wolk_rechts3, 150, 60);
  circle(wolk_rechts4, 172, 83);

  fill("white");
  circle(wolkwit_rechts1, 142, 53);
  circle(wolkwit_rechts2, 127, 68);
  circle(wolkwit_rechts3, 142, 53);
  circle(wolkwit_rechts4, 165, 75);

  // Auto



  fill("red");
  rect(auto_onderkant, 487, 200, 53);
  rect(auto_bovenkant, 457, 120, 38);

  fill("black");
  circle(linker_wiel, 540, 38);
  circle(rechter_wiel, 540, 38);

  linker_wiel = linker_wiel + 1;
  rechter_wiel = rechter_wiel + 1;
  auto_onderkant = auto_onderkant + 1;
  auto_bovenkant = auto_bovenkant + 1;

  zon_binnenkant = zon_binnenkant + 1;
  zon_buitenkant = zon_buitenkant + 1;

  wolk_links1 = wolk_links1 + -1;
  wolk_links2 = wolk_links2 + -1;
  wolk_links3 = wolk_links3 + -1;
  wolk_links4 = wolk_links4 + -1;

  wolkwit_links1 = wolkwit_links1 + -1;
  wolkwit_links2 = wolkwit_links2 + -1;
  wolkwit_links3 = wolkwit_links3 + -1;
  wolkwit_links4 = wolkwit_links4 + -1;

  wolk_rechts1 = wolk_rechts1 + -1;
  wolk_rechts2 = wolk_rechts2 + -1;
  wolk_rechts3 = wolk_rechts3 + -1;
  wolk_rechts4 = wolk_rechts4 + -1;

  wolkwit_rechts1 = wolkwit_rechts1 + -1;
  wolkwit_rechts2 = wolkwit_rechts2 + -1;
  wolkwit_rechts3 = wolkwit_rechts3 + -1;
  wolkwit_rechts4 = wolkwit_rechts4 + -1;

 if(zon_binnenkant >= 860) {
  zon_binnenkant = -60
 }

  if(zon_buitenkant >= 860) {
  zon_buitenkant = -60
 }

   if(auto_bovenkant >= 860) {
  auto_bovenkant = -60;
  auto_onderkant = -100;
  linker_wiel = -60;
  rechter_wiel = 60;
 }
    if(linker_wiel >= 860) {

  rechter_wiel = -180;
 }
 if (wolk_links1 <= 0) {
  wolk_links1 = 860;
  wolk_links2 = 860;
  wolk_links3 = 860;
  wolk_links4 = 860;
 }
 if (wolkwit_links1 <= 0) {
  wolkwit_links1 = 860;
  wolkwit_links2 = 860;
  wolkwit_links3 = 860;
  wolkwit_links4 = 860;
 }
}