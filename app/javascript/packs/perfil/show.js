export default function Show(){
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };

  let startsAtCero = 0 
  let startsAtOne = 1
  let startsAtTwo = 2 
  this.carrucelIndexGalery = function(){
    let containerIndex = document.getElementsByClassName('index-image-carrucel-container')[0];
    let large = gon.large
    for ( let i=0; i < large; i += 1 ){
        containerIndex.innerHTML+=`<p class="index-states">${i}</p>
        `
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
}

