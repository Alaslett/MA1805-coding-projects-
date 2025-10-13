
 let Width = 640;
 let red;
 let green;
 let blue;
 let play = 0;
 let size = 20;
 let name = "Amy"

function setup() {
  createCanvas(Width, Width);
 red = random(0, 255);
 green = random(0,255);
 blue = random (0, 255);
}

function draw() {
  background(220);
  fill(red, green, blue);
  circle(blue, red, size);
  size = size+0.1
  //Text attributes
fill(100, 100, 100)
  textSize(20)
  text(name+":"+size, 100, 100);

}
