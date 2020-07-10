export default function Hug(){
  this.context = function(){
      return document.querySelector("[data-context]").dataset['context'];
  };

  this.hugSeconds = function(second){
    let circle_hug = document.getElementsByClassName('circle-hug')[0];


      let myTimer = function() {
        second += 1 
        return console.log(`${second}`)
        }

    circle_hug.onmouseup = function(myTimer){
      clearInterval(myTimer);
      console.log(`hola`)
    }
      
    circle_hug.onmousedown = function(myTimer){
        setInterval(myTimer, 1000);  
      };
    
  }
}