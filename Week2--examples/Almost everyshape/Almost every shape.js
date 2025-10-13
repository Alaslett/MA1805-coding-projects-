function setup() {
    createCanvas (700,700);

    //white background
    background(255);

    //turn off defult black outline on shapes
    noStroke();

    //red rectangle
    fill(255, 0, 0);
    rect(125, 100, 50, 100);

    //green quadrilateral
    fill(0,0,255);
    quad(300, 100, 400, 125, 400, 200, 300, 175);

    //blue square
    fill(0, 0, 255);
    square(500, 100, 100);

    //yellow oval
    fill(255, 255, 0);
    ellipse(150, 350, 100, 50);

    //cyan circle 
    fill(0, 255, 255);
    circle(350, 350, 100);

    //magenta arc--note the use of PI values to se the angles of the arc
    fill(255, 0, 255);
    arc(550, 350, 100, 100, HALF_PI, TWO_PI);

    //purple triangle
    fill(205, 155, 255);
    triangle(100, 500, 100, 600, 200, 550); //three pairs of coordinates, one for each corner of the triangle

    //orange line
    stroke(255, 205, 155);
    line(300, 500, 400, 600);

    //black dot--note use of strokeweight to change the size of the point
    strokeWeight(3);
    stroke(0);
    point(550, 550);
}