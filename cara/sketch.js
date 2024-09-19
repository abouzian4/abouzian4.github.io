let mic;
/*la linia anterior crea una variable que anomenem mic de microfon i la posem al principi de tot perqué és una variable global que afecta a tot el codi
*/
function setup() {
  createCanvas(400, 600);
  mic=new p5.AudioIn();
  /*li dic que lo que he creat mic és una nova entrada de audio de P5
  */
}

function draw() {
  let vol=mic.getLevel();
  /*el que hem creat que ja és una entrada de audio li aplico un metode anomenat get level que em dona el volum de l'audio i el guardo en una variable anomenat vol.
  
  */
  let h=map(vol,0,1,height,0);
  /*el que fa és agafar els volums que sempre estaran entre 0 i 1 i mapejar-los o comvertir-los en valors entre 0 i l'alçada
  */
  background(66, 242, 60);
  fill (229, 194,152);
  /* sempre s'ha de posar abans de la forma (ellipse, rect, arc) el color que funciona com el background amb un número escala de grisos, etc
  */
  ellipse(200, 300, 220, 300);
  /*hi ha 4 números o parametres o arguments
  dintre de la funció ellipse, el primer i el segon és la posició del centre de la el·lipse concretament el primer és la cordenada x del centre i el segon la cordenada y. El tercer número és l'amplada de la el·lipse en pícsels i el quart número és l'alçada en pícsels
  */
  fill(0, 0, 130);
  ellipse(150,240,40,20);
   ellipse(250,240,40,20);
  fill(255,0,0);
  arc(200,370,100,20+h,0,PI);
  /*els 4 primers números són igual que la el·lipse i els 2 ultims indican la forma de l'arc 0, PI sonrient i PI,0 trist
  */
}
