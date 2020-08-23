export default function Hug(){
  this.context = function(){
      return document.querySelector("[data-context]").dataset['context'];
  };

 /* this.animationHug = function(){
    let circleHug = document.getElementsByClassName("circle-hug")[0];
  }*/



let contador = 0 
  this.hugSeconds = function(){
    let circleHug = document.getElementsByClassName("circle-hug")[0];
    let seconds = document.getElementsByClassName("seconds")[0];
    let sendHugOf = document.getElementsByClassName("send-hug-of")[0];

    let elementCircleHugId = document.getElementsByClassName("circle-hug")[1];

    let hug = document.getElementById("abrazo");
    (function(){
      let interval
      circleHug.addEventListener('mouseup',(e)=>{
          clearInterval(interval)
      })

    circleHug.addEventListener('mousedown', (e)=>{
      let contar = function(){
      let circleHugID = window.getComputedStyle(elementCircleHugId).getPropertyValue("height")
      let heigthCircleHugId = parseInt(circleHugID)
        contador++
        if (contador<=60){
       
       let heigNow = heigthCircleHugId - 5 + "px"
       elementCircleHugId.style.height = heigNow

         hug.value = contador
          sendHugOf.innerHTML = contador+'S'
          seconds.innerHTML = contador+'S'
         }
      }

     interval =  setInterval(contar,1000)
    },true)

    }())
  }
} 
