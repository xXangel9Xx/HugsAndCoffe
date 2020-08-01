export default function Show(){
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };
//VARIABLES

  let containerPhotosStates = document.getElementsByClassName('container-photos-states')[0];
  
//estas variables son para añadirle los eventos
  let nextCarrucel = document.getElementById("next-carrucel");
  let backCarrucel = document.getElementById("back-carrucel");
//estas variables son usadas para unicamente añadir un innerHTML
  let containerIndex = document.getElementsByClassName('index-image-carrucel-container')[0];

//estas variables la utilizan las funcionescarrucelIndexGalery
  let large = gon.large;// esta variable contiene un numero integer que es el largo de todas las imagenes guardadas
  let signedId = gon.signedId  //este es el signedId de cada imagen, devuelve un arreglo con todas
  let next6 = 6
//esta variables es para verificar los valores  
  let valores = document.getElementsByClassName('index-states');
// estas variables la utilizan las funciones renderCarrucelGalery,increase,decrease
  let startsAtCero = 0;
  let position = 0;
  let startsAtOne = 1;
  let startsAtTwo = 2;

//Renderiza Las Imagenes De Galery
  function renderCarrucelGalery(){
    let subtitle = gon.subtitle
    let signedId = gon.signedId
    let filename = gon.filename
    if (signedId[startsAtCero] != null && signedId[startsAtCero] != undefined ){
      //CERO
      containerPhotosStates.innerHTML+=`
        <div class="container-image-show">
        <img src="${baseUrl}rails/active_storage/blobs/${signedId[startsAtCero]}/${filename[startsAtCero]}" alt="image" class="photos-state">
        <p class="subtitle-state">${subtitle[startsAtCero]}</p>
        </div>
        `
    } 
      //ONE
    if (signedId[startsAtOne] != null && signedId[startsAtOne] != undefined ){
      containerPhotosStates.innerHTML+=`
        <div class="container-image-show">
        <img src="${baseUrl}rails/active_storage/blobs/${signedId[startsAtOne]}/${filename[startsAtOne]}" alt="image" class="photos-state">
        <p class="subtitle-state">${subtitle[startsAtOne]}</p>
        </div>
        `
    }     
      //Two
    if (signedId[startsAtTwo] != null && signedId[startsAtTwo] != undefined ){
      containerPhotosStates.innerHTML+=`
        <div class="container-image-show">
        <img src="${baseUrl}rails/active_storage/blobs/${signedId[startsAtTwo]}/${filename[startsAtTwo]}" alt="image" class="photos-state">
        <p class="subtitle-state">${subtitle[startsAtTwo]}</p>
        </div>
      `
    }    
  }


  function valores(next6){
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

  function carrucelIndexGalery(){
    for ( let i=0; i <= large; i += 1 ){ 
      if (i<=6 && signedId[i] != null && signedId[i] != undefined){//esto verifica que la posicion no este vacia y si exista
        containerIndex.innerHTML+=`<p class="index-states" data-value=${i}>${i}</p>
        `
      }else if (i>=6 && signedId[i] != null && signedId[i] != undefined){
          next6 +=1
          valores(next6)//esto lo que hace es hacer que cambie los numeros y se mantengan 7 posiciones
      }
    }
  }

  function increase(){
    if (position<=large){
      position++
      startsAtCero++
      startsAtOne++ 
      startsAtTwo++
    }else if (position>large){
      position = 0
      startsAtCero = 0
      startsAtOne = 1
      startsAtTwo = 2
    }
    renderCarrucelGalery()
    carrucelIndexGalery()
  }

  function decrease(){
    if (position>=0){
      position --
      startsAtCero --
      startsAtOne -- 
      startsAtTwo --

    }else if (position < 0 && signedId[startsAtCero] != null && signedId[startsAtCero] != undefined && signedId[startsAtOne] != null && signedId[startsAtOne] != undefined && signedId[startsAtTwo] != null && signedId[startsAtTwo] != undefined){
      position = large
      startsAtCero = large
      startsAtOne = large 
      startsAtTwo = large
    }else if (position < 0){
        position = 0
        startsAtCero = 0
        startsAtOne = 1 
        startsAtTwo = 2
    }
    renderCarrucelGalery()
    carrucelIndexGalery()
  }
  this.carrucel = function (){
    nextCarrucel.addEventListener('click',increase,true)
    backCarrucel.addEventListener('click',decrease,true)
    renderCarrucelGalery()
    carrucelIndexGalery()
  }



  /////////////////////////
}

