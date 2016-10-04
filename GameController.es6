const class1 = require('./class1.es6')
const class2 = require('./GameMove.es6')
const class3 = require('./GameView.es6')

class Controller {
  constructor(){
    this.a = new class1();
    this.b = new class2();
    this.c = new class3();
    this.loop();
  }
 
 loop(){
   this.c.draw(this.a.pos);
   this.a.move(this.key.key);
 }
}
const i = new Controller();
