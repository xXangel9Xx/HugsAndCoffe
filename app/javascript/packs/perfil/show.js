export default function Show(){
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };
    this.carrucelGalery = function(){
        let imageShow = document.getElementsByClassName('container-image-show')[0];
        let states = gon.states
       /* let images = gon.galeries
        console.log(images) < esto no funciona*/
        console.log(states)
           imageShow.innerHTML = `${states[0].record.subtitulo}`
       
       
       
        console.log()
     
  
   /* 
   
     console.log(gon.galeria)
   let galeriesAll = document.getElementById('galeries')
  
    console.log(`${galeriesAll.data("galeriesAll")}`)*/
      /* let galeriesAll = document.getElementsByClassName('container-image-show')[0];
    
            console.log(`${galeriesAll.dataset.galeries}`)*/
    

       

       
    }
}
