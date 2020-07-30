export default function Show(){
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };

  let startsAtCero = 0 
  let position = 20
  let startsAtOne = 1
  let startsAtTwo = 2 
  
  function followerPosition(){
    let indexStates = document.getElementsByClassName('index-states')
   // for(let i = 0; i<indexStates.length;i+=1){
            //CERO
        if (position == startsAtCero){
              indexStates[startsAtCero].style.backgroundColor = '#EE4380';
              indexStates[startsAtCero].style.color = 'white';
              console.log("dentro de follower")
            //ONE
        } else if(position == startsAtOne ){
            indexStates[startsAtOne].style.backgroundColor = '#EE4380';
             indexStates[startsAtOne].style.color = 'white';
             console.log("dentro de two")
             //TWO
        } else if (position == startsAtTwo){
          indexStates[startsAtTwo].style.backgroundColor = '#EE4380';
          indexStates[startsAtTwo].style.color = 'white';
        }

  }


  this.carrucelGalery = function(){
      let containerPhotosStates = document.getElementsByClassName('container-photos-states')[0];
      let subtitle = gon.subtitle
      let signedId = gon.signedId
      let filename = gon.filename
    if (signedId[startsAtCero] != null && signedId[startsAtCero] != undefined ){
      containerPhotosStates.innerHTML+=`
      <div class="container-image-show">
      <img src="${baseUrl}rails/active_storage/blobs/${signedId[startsAtCero]}/${filename[startsAtCero]}" alt="image" class="photos-state">
      <p class="subtitle-state">${subtitle[startsAtCero]}</p>
      </div>
          `
    } 
    if (signedId[startsAtOne] != null && signedId[startsAtCero] != undefined ){
      containerPhotosStates.innerHTML+=`
      <div class="container-image-show">
      <img src="${baseUrl}rails/active_storage/blobs/${signedId[startsAtOne]}/${filename[startsAtOne]}" alt="image" class="photos-state">
      <p class="subtitle-state">${subtitle[startsAtOne]}</p>
      </div>
          `
    }     
    if (signedId[startsAtTwo] != null && signedId[startsAtCero] != undefined ){
      containerPhotosStates.innerHTML+=`
      <div class="container-image-show">
      <img src="${baseUrl}rails/active_storage/blobs/${signedId[startsAtTwo]}/${filename[startsAtTwo]}" alt="image" class="photos-state">
       <p class="subtitle-state">${subtitle[startsAtTwo]}</p>
      </div>
          `
    }    
  }

function valores(next6){
  let valores = document.getElementsByClassName('index-states');
  let  actualizacion = parseInt(valores[0].dataset.value)
    valores[0].innerHTML =  next6 - 6 

    let  actualizacion1 = parseInt(valores[1].dataset.value)
    valores[1].innerHTML =   next6  - 5 

    let  actualizacion2 = parseInt(valores[2].dataset.value)
    valores[2].innerHTML =   next6  - 4

    let  actualizacion3 = parseInt(valores[3].dataset.value)
    valores[3].innerHTML =  next6  - 3 

    let  actualizacion4 = parseInt(valores[4].dataset.value)
    valores[4].innerHTML =   next6 - 2 

    let  actualizacion5 = parseInt(valores[5].dataset.value)
    valores[5].innerHTML =   next6  - 1

    let  actualizacion6 = parseInt(valores[6].dataset.value)
    valores[6].innerHTML =   next6 
}

  this.carrucelIndexGalery = function(){
    let containerIndex = document.getElementsByClassName('index-image-carrucel-container')[0];
    let large = gon.large
    let next6 = 6
    for ( let i=0; i <= 30; i += 1 ){
      if (i<=6){
        containerIndex.innerHTML+=`<p class="index-states" data-value=${i}>${i}</p>
        `
      }else if (position>=i){
          next6 +=1
          valores(next6)
          console.log(variableloca)
          
      }
    }
    followerPosition()
  }
}

