class Een{
  constructor(){
    this.left = false;
    this.right = false;
    this.down = false;
    this.up = false;
    
    document.onkeydown = checkKey;
    this.checkKey();
  };
  
  checkKey(e){
    if(e.keyCode == "37"){
      this.left = true;
    }
    else if(e.keyCode == "39"){
      this.right = true;
    }
    else if(e.keyCode == "40"){
      this.down = true;
    }
    else if(e.keyCode == "38"){
      this.up = true;
    };
 };
};

