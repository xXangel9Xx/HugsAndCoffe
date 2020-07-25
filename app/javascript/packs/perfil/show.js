export default function Show(){
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };
    this.carrucelGalery = function(){
       console.log(gon.states)
   /* let galeriesAll = document.getElementById('galeries')
  
    console.log(`${galeriesAll.data("galeriesAll")}`)*/
      /* let galeriesAll = document.getElementsByClassName('container-image-show')[0];
    
            console.log(`${galeriesAll.dataset.galeries}`)*/
    

       

       
    }
}
