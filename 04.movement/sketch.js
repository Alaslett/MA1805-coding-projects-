let rgb = [0, 0, 255];
let words = ["arrays", "are", "arrays", 'lists'];
let select = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
 if (select == 0){
rgb =[75, 0, 255]

 } else
  rgb = [0,255,0]

  fill(rgb)
  let i = 1;
  while(i<400){
    let r = random (50);
circle(i, r+300, r);
i++;
  }
  textSize(30);
  text(select, 50,50)
  text(words[3],100,100)
  console.log(words.length);
}

function mouseClicked(){
  if (select == 0){
select = 1 ;
  }else{
select = 0;

  }
}