export default function Hug(){
  this.context = function(){
      return document.querySelector("[data-context]").dataset['context'];
  };
let contador = 0
  this.hugSeconds = function(){
    let circleHug = document.getElementsByClassName("circle-hug")[0];
    (function(){
      let interval
      circleHug.addEventListener('mouseup',(e)=>{
          console.log(` CREO QUE LO LOGRE ${contador}`)
          clearInterval(interval)
      })

    circleHug.addEventListener('mousedown', (e)=>{
      let contar = function(){
        contador++
        console.log(`${contador}`)
      }
     interval =  setInterval(contar,1000)
    },true)
    }())
  }
} 
