class Twee{
    constructor(x,y){
    this.x = x;
    this.y = y;
    }

    //verplaatst de locatie
    move(toets){
        //locatie verplaatst naar rechts
        if(toets == 39){
            this.x += 10;
        }
        //locatie verplaatst naar links
        if(toets == 37){
            this.x -= 10;
        }
    }

    get location(){
        return {x: this.pos.x, y: this.pos.y};
    }
