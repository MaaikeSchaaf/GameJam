class een{
  constructor(){
    this.left = false;
    this.right = false;
    document.onkeydown = checkKey;
    this.checkKey();
  };
  
  checkKey(e){
    if(e.keyCode == "37"){
      this.left = true;
      this.right = false;
      
    }
    else if(e.keyCode == "39"){
      this.left = false;
      this.right = true;
     
   };
 };
};
