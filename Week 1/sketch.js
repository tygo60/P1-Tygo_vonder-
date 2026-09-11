function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(220);


  // 1. Naam

  fill("black");
  noStroke();
  text("1. Tygo Vonder", 5, 65);
  textSize(32);


  // 2. Nederlandse vlag

  fill("black");
  text("2.", 5, 110);
  textSize(32);

  noStroke();

  fill("red");
  rect(20, 130, 140, 40);

  fill("white");
  rect(20, 171, 140, 40);

  fill("blue");
  rect(20, 210, 140, 40);


  // 3. Checkerboard

  fill("black");
  text("3.", 5, 285);
  textSize(32);

  strokeWeight(5);
  fill("white");
  stroke(0);
  rect(20, 300, 100, 100);

  fill("black");
  rect(20, 300, 30, 30);

  fill("black");
  rect(90, 300, 30, 30);

  fill("black");
  rect(20, 370, 30, 30);

  fill("black");
  rect(90, 370, 30, 30);

  fill("black");
  rect(55, 335, 30, 30);


  // 4. Huisje

  noStroke();
  text("4.", 5, 450);
  textSize(32);

  noFill();
  stroke(0);

  triangle(20, 525, 60, 470, 100, 525);
  rect(20, 530, 80, 80);


  // 5. Stoplicht

  noStroke();

  fill("black");
  text("5.", 450, 65);
  textSize(32);

  fill(128, 128, 128);
  rect(450, 100, 50, 200);

  fill(128, 128, 128);
  rect(465, 300, 20, 80);


  // Lampen

  // Rood
  fill(255, 1, 0);
  circle(475, 130, 30);

  // Oranje
  fill(255, 128, 0);
  circle(475, 190, 30);

  // Groen
  fill(0, 255, 1);
  circle(475, 250, 30);


  // 6. Dobbelsteen

  noStroke();

  fill("black");
  text("6.", 450, 450);
  textSize(32);

  fill("white");
  stroke(1);
  rect(450, 475, 125, 125, 10);

  noStroke();
  fill("black");

  circle(470, 495, 30);
  circle(510, 535, 30);
  circle(550, 575, 30);


  // 7. Mario

  noStroke();

  fill("black");
  text("7.", 700, 65);
  textSize(32);

  fill("red");
  rect(755, 110, 110, 25);
  rect(740, 135, 185, 25);

  fill("#FFC89F");
  rect(755, 160, 110, 25);

  fill("#984039");
  rect(740, 160, 60, 25);

  fill("black");
  rect(850, 160, 20, 25);

  fill("#FFC89F");
  rect(740, 185, 190, 25);

  fill("black");
  rect(850, 185, 20, 25);

  fill("#984039");
  rect(720, 185, 20, 25);
  rect(720, 205, 20, 25);

  fill("#FFC89F");
  rect(720, 205, 230, 25);

  fill("#984039");
  rect(720, 205, 20, 25);
  rect(720, 205, 20, 25);
  rect(765, 185, 20, 25);
  rect(765, 205, 20, 25);
  rect(785, 205, 20, 25);

  fill("#FFC89F");
  rect(720, 225, 210, 15);

  fill("#984039");
  rect(720, 225, 45, 25);

  fill("black");
  rect(870, 195, 20, 25);
  rect(850, 215, 90, 20);

  fill("#FFC89F");
  rect(765, 240, 160, 25);

  fill("red");
  rect(735, 265, 160, 25);

  fill("blue");
  rect(785, 265, 25, 25);

  fill("red");
  rect(715, 285, 210, 25);

  fill("blue");
  rect(785, 285, 25, 25);
  rect(850, 285, 25, 25);

  fill("red");
  rect(700, 305, 245, 25);

  fill("blue");
  rect(850, 305, 25, 25);

  fill("red");
  rect(700, 305, 245, 25);

  fill("blue");
  rect(785, 305, 90, 25);

  fill("#FFC89F");
  rect(700, 330, 245, 25);

  fill("blue");
  rect(760, 330, 25, 25);
  rect(875, 330, 25, 25);

  fill("yellow");
  rect(850, 330, 25, 25);
  rect(785, 330, 25, 25);

  fill("blue");
  rect(805, 330, 45, 25);

  fill("red");
  rect(735, 330, 25, 25);
  rect(900, 330, 25, 25);

  fill("#FFC89F");
  rect(700, 350, 245, 25);
  rect(700, 350, 245, 25);
  rect(700, 370, 245, 25);

  fill("blue");
  rect(760, 350, 140, 25);
  rect(740, 375, 175, 25);
  rect(740, 400, 175, 25);

  fill("#DCDCDC");
  rect(805, 400, 45, 25);

  fill("#984039");
  rect(720, 425, 65, 25);
  rect(690, 445, 95, 25);

  fill("#984039");
  rect(870, 425, 65, 25);
  rect(870, 445, 95, 25);


  // 8. Kirby

  noStroke();

  fill("black");
  text("8.", 700, 520);
  textSize(32);


  // Kirby lichaam

  fill("#ff69b4");
  rect(740, 590, 160, 20);
  rect(720, 610, 200, 20);
  rect(700, 630, 240, 80);
  rect(720, 710, 200, 40);
  rect(740, 750, 160, 20);


  // Rode voeten

  fill("red");
  rect(700, 690, 60, 40);
  rect(880, 690, 60, 40);
  rect(720, 730, 60, 20);
  rect(860, 730, 60, 20);


  // Zwarte ogen

  fill("black");
  rect(760, 630, 20, 40);
  rect(840, 630, 20, 40);


  // Witte ogen

  fill("white");
  rect(760, 630, 20, 20);
  rect(840, 630, 20, 20);


  // Rode mond

  fill("red");
  rect(800, 670, 20, 20);


  // Donkerroze wangen

  fill("#ff1493");
  rect(720, 670, 20, 20);
  rect(880, 670, 20, 20);
}