
let mic;
function setup() {
  createCanvas(400, 600);
  mic=new p5.AudioIn();
  mic.start();
 
}
function draw() {
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,300);
  background(66, 242, 60);
  fill (229, 194,152);
  ellipse(200, 300, 220, 300);
  fill(0, 0, 130);
  ellipse(150,240,40,20+h*5);
   ellipse(250,240,40,20+h*5);
  fill(255,0,0);
  arc(200,370,100,20+h*5,0,PI);
}
