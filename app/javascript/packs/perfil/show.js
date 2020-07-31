export default function Show(){
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };

  let startsAtCero = 0 
  let position = 0
  let startsAtOne = 1
  let startsAtTwo = 2 
  
  function markPosition(){
    let indexStates = document.getElementsByClassName('index-states');
    let large = gon.large// esta variable contiene un numero integer que es el largo de todas las imagenes guardadas
            //CERO
        if (position == startsAtCero){
          indexStates[startsAtCero].style.backgroundColor = '#EE4380';
          indexStates[startsAtCero].style.color = 'white';

              if (position > 0 && indexStates[startsAtCero-=1].style.backgroundColor != 'white'){
                indexStates[startsAtCero-=1].style.backgroundColor = 'white';
                indexStates[startsAtCero-=1].style.color = 'black';
              }
            
           
           
            //ONE
        } else if(position == startsAtOne ){
            indexStates[startsAtOne].style.backgroundColor = '#EE4380';
            indexStates[startsAtOne].style.color = 'white';

            if (indexStates[startsAtOne-=1].style.backgroundColor != 'white'){
              indexStates[startsAtCero-=1].style.backgroundColor = 'white';
              indexStates[startsAtCero-=1].style.color = 'black';
            }else if (indexStates[startsAtOne+1].style.backgroundColor != 'white'){
              indexStates[startsAtCero+=1].style.backgroundColor = 'white';
              indexStates[startsAtCero+=1].style.color = 'black';
            }
            
             //TWO
 

        } else if (position == startsAtTwo){
          indexStates[startsAtTwo].style.backgroundColor = '#EE4380';
          indexStates[startsAtTwo].style.color = 'white';
          
          if (position < large && indexStates[startsAtTwo+1].style.backgroundColor != 'white'){
            indexStates[startsAtTwo+=1].style.backgroundColor = 'white';
            indexStates[startsAtTwo+=1].style.color = 'black';
          }

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
    // si (next6 = 13) esto deberia arrojar este pedaso de codigo
    // no necesito hacer un parseInt ya que en si nunca estoy jugando con los valores el html ni restandole a los valores de html
  valores[0].innerHTML != next6 - 6?  valores[0].innerHTML =  next6 - 6 : valores[0].innerHTML//7
  valores[1].innerHTML != next6 - 5?  valores[1].innerHTML =  next6 - 5 : valores[1].innerHTML//8
  valores[2].innerHTML != next6 - 4?  valores[2].innerHTML =  next6 - 4 : valores[2].innerHTML//9
  valores[3].innerHTML != next6 - 3?  valores[3].innerHTML =  next6 - 3 : valores[3].innerHTML//10
  valores[4].innerHTML != next6 - 2?  valores[4].innerHTML =  next6 - 2 : valores[4].innerHTML//11
  valores[5].innerHTML != next6 - 1?  valores[5].innerHTML =  next6 - 1 : valores[5].innerHTML//12
  valores[6].innerHTML =  next6  //13
}
  this.carrucelIndexGalery = function(){
    let containerIndex = document.getElementsByClassName('index-image-carrucel-container')[0];
    let large = gon.large  // esta variable contiene un numero integer que es el largo de todas las imagenes guardadas
    let signedId = gon.signedId  //este es el signedId de cada imagen, devuelve un arreglo con todas
    let next6 = 6

    for ( let i=0; i <= 30; i += 1 ){ 
      if (i<=6 && signedId[i] != null && signedId[i] != undefined){//esto verifica que la posicion no este vacia y si exista
        containerIndex.innerHTML+=`<p class="index-states" data-value=${i}>${i}</p>
        `
      }else if (i>=6 && signedId[i] != null && signedId[i] != undefined){
          next6 +=1
          valores(next6)//esto lo que hace es hacer que cambie los numeros y se mantengan 7 posiciones
      }
    }
    markPosition()
  }
}

