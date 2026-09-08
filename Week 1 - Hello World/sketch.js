function setup() {
  createCanvas(600, 400);
}

function draw() {

  // Horizontale lijnen
background(240);
strokeWeight(3);
stroke(0);

line(0, 100, 600, 100);

line(0, 120, 600, 120);
line(0, 250, 600, 250);
line(0, 190, 300, 190);

// Verticale lijnen
line(0, 0, 0, 400);
line(100, 0, 100, 400);
line(150, 0, 150, 100);
line(200, 0, 200, 400);
line(250, 0, 250, 120);
line(300, 0, 300, 400);
line(350, 0, 350, 400);
line(400, 0, 400, 400);
line(450, 0, 450, 400);
line(650, 0, 650, 400);



// Blokken

fill("red");         
      
rect(1.5, 121.5, 97, 127);

fill("yellow");         
      
rect(1.5, 0, 97, 98);

fill("blue");

rect(1.5, 101, 247, 18);

fill("yellow");

rect(101, 190, 198, 59);

fill("black");

rect(400, 120, 50, 130);


fill("blue");

rect(300, 120, 50, 130);  

fill("red");

rect(451, 121, 149, 128);

fill("green");

rect(451, 251, 148, 148);

fill("red");

rect(301, 251, 48, 147.6);

fill("white");

rect(351, 251, 48, 147.6);

fill("white");

rect(401, 251, 48, 147.6);



fill("blue");

rect(450, 0, 200, 99);

fill("yellow");

rect(150, 0, 200, 99);

fill("white");

rect(350, 0, 50, 99);



fill("red");

rect(400, 0, 50, 99);



fill("white");

rect(101, 121, 198, 70);





fill("white");

rect(100, 251, 98, 147);

fill("blue");

rect(100, 251, 199, 68);

fill("black");

rect(0, 251, 100, 149);

fill("yellow");

rect(200, 321, 99, 77.5);

stroke("black");        // zwarte lijn
line(100, 190, 300, 190);

stroke("black");        // zwarte lijn
line(200, 320, 300, 320);

stroke("black")
line(600, 0, 600, 400);

stroke("black")
line(0, 0, 0, 400);

stroke("black");
line(0, 0, 600, 0);

stroke("black");
line(0, 400, 600, 400);




}