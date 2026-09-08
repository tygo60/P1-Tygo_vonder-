function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(220);

  // Naam
  fill("black");
  noStroke();
  text("1. Tygo Vonder", 5, 65);
  textSize(32);

  // Checkerboard

  text("3.", 5, 285);
    textSize(32)
    



    fill("black");
  text("2.", 5, 110);
  textSize(32);

  noStroke();
  fill("red");
  rect(20, 130, 140, 40);
  

  fill("white");
  rect(20, 171, 140, 40);
  noStroke();


  fill("blue");
  rect(20, 210, 140, 40);
  noStroke();

  strokeWeight(5);
  fill("white");
  stroke(0);
  rect(20, 300, 100, 100)

  fill("black");
  rect(20, 300, 30, 30)
  
    fill("black");
  rect(90, 300, 30, 30)

  fill("black");
  rect(20, 370, 30, 30)
  
    fill("black");
  rect(90, 370, 30, 30)

      fill("black");
  rect(55, 335, 30, 30)

  // Huisje


  noStroke();
    text("4.", 5, 450);

    noFill();
stroke(0);
triangle(20, 525, 60, 470, 100, 525);
rect(20, 530, 80, 80);

// Stoplicht
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

    // Dobbelsteen

        noStroke();
    fill("black");
    text("6.", 450, 450);
    textSize(32);

fill("white");
stroke(1);
rect(450, 475, 125, 125, 10);

noStroke();
fill("black");
circle(470, 495, 30)
circle(510, 535, 30)
circle(550, 575, 30)

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
fill("#984039");
rect(720, 205, 20, 25);
fill("#FFC89F");
rect(720, 205, 230, 25);
fill("#984039");
rect(720, 205, 20, 25);
fill("#984039");
rect(720, 205, 20, 25);
}