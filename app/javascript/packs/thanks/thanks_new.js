export default function HugsOrCoffe(){
    this.context = function(){
        return document.querySelector("[data-context]").dataset['context'];
    };
    this.containerFollowing = function(){
        let container_following = document.getElementsByClassName('container-following');
        let container_hug = document.getElementsByClassName('container_hug')[0];
        let container_form_hug = document.getElementsByClassName('container-form-hug')[0];
            for(let i = 0 ; i < container_following.length ; i += 1){
                container_following[i].addEventListener('click',(e)=>{
                   container_hug.style.display = "none";
                   container_form_hug.style.display = "block";
                },true);
            };
    };

    this.selectionFormHug = function(){
        let image_heart_thanks = document.getElementsByClassName('image_heart_thanks');
        let container_new_thanks = document.getElementsByClassName('container-new-thanks')[0];
        let container_hug = document.getElementsByClassName('container_hug')[0];
        for(let i = 0 ; i < image_heart_thanks.length ; i+= 1){
            image_heart_thanks[i].addEventListener('click',(e) => {
                container_new_thanks.style.display = "none";
                container_hug.style.display = "block";
            },true);
        };
    };

    this.selectionFormCoffe = function(){
      let image_coffe_thanks = document.getElementsByClassName('image_coffe_thanks');
      let container_new_thanks = document.getElementsByClassName('container-new-thanks')[0];
      let container_thanks_form_coffe = document.getElementsByClassName('container_thanks_form_coffe')[0];
            for(let i=0;i < image_coffe_thanks.length;i+=1){
                 image_coffe_thanks[i].addEventListener('click',(e)=>{
                    container_new_thanks.style.display = "none";
                    container_thanks_form_coffe.style.display = "block";
                 },true);
             };
    };

    this.exitThankCoffe = function(){
       let exit_thank_coffe = document.getElementsByClassName('container_exit_coffe') 
       let container_new_thanks = document.getElementsByClassName('container-new-thanks')[0];
       let container_thanks_form_coffe = document.getElementsByClassName('container_thanks_form_coffe')[0];
       for(let i=0;i < exit_thank_coffe.length ; i+=1){
          exit_thank_coffe[i].addEventListener('click',(e)=>{
            container_thanks_form_coffe.style.display = "none";
            container_new_thanks.style.display = "block"; 
            
          },true);
       };
    };

    this.exitHug = function(){
        let container_exit_hug = document.getElementsByClassName('container_exit_hug');
        let container_hug = document.getElementsByClassName('container_hug')[0];
        let container_new_thanks = document.getElementsByClassName('container-new-thanks')[0];
        for(let i=0; i < container_exit_hug.length; i+=1){
            container_exit_hug[i].addEventListener('click',(e)=>{
               container_hug.style.display = "none";
               container_new_thanks.style.display = "block";             
            },true);
        };
    };

    this.exitFormHug = function(){
          let container_exit_hug_form = document.getElementsByClassName('container_exit_hug_form');
          let container_hug = document.getElementsByClassName('container_hug')[0];
          let container_form_hug = document.getElementsByClassName('container-form-hug')[0];
          for(let i=0; i < container_exit_hug_form.length; i+=1){
              container_exit_hug_form[i].addEventListener('click', (e) =>{
                container_form_hug.style.display = "none";
                container_hug.style.display = "block"; 
              },true);
          };
    };


};