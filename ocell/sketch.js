let mic;
function setup() {
  createCanvas(1000, 1000);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol=mic.getLevel();
  background(0,255,0);
  let h=map(vol, 0,1,0,300);
  fill(0+h*30,0,255-h*10);
  beginShape();
  vertex(300, 100);
  vertex(600, 100+h*10);
  vertex(450, 250);
   vertex(600, 250-h*10);
   vertex(600, 500);
   vertex(300, 800);
   vertex(0, 800);
  vertex(300,500);
  endShape(CLOSE);
    fill(255-h*15,0,0+h*15);
  ellipse(400,200,50,50+h*5);

}
