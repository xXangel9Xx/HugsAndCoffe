export default function Hug(){
  this.context = function(){
      return document.querySelector("[data-context]").dataset['context'];
  };

  this.animationHug = function(){
    
  }



let contador = 0
  this.hugSeconds = function(){
    let circleHug = document.getElementsByClassName("circle-hug")[0];
    let seconds = document.getElementsByClassName("seconds")[0];
    (function(){
      let interval
      circleHug.addEventListener('mouseup',(e)=>{
          console.log(`${contador}`)
          clearInterval(interval)
      })

    circleHug.addEventListener('mousedown', (e)=>{
      let contar = function(){
        contador++
        if (contador<60){
        seconds.innerHTML = contador+'S'
         }
      }
     interval =  setInterval(contar,1000)
    },true)
    }())
  }
} 
