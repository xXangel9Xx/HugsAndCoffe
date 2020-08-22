export default function New(){
    this.context = function(){
        return document.querySelector("[data-context]").dataset['context'];
    }
    this.publicFalseToTruePerfil = function(){
        let publicFalseToTrue = document.getElementById("not-public");
        let publicTrueToFalse = document.getElementById("perfil-public-true");
        
        let publicPerfil = document.getElementById("public-perfil");
        publicFalseToTrue.addEventListener('click',(e)=>{
           publicFalseToTrue.style.display = "none"
           publicTrueToFalse.style.display = "flex"
           publicPerfil.value = publicTrueToFalse.dataset.public
        },true)
    }

    this.publicTrueToFalsePerfil = function(){
        let publicTrueToFalse = document.getElementById("perfil-public-true");        
        let publicFalseToTrue = document.getElementById("not-public");

        let publicPerfil = document.getElementById("public-perfil");
        publicTrueToFalse.addEventListener('click',(e)=>{
                   publicTrueToFalse.style.display = "none"
                   publicFalseToTrue.style.display = "flex"


                   publicPerfil.value = publicFalseToTrue.dataset.public
        },true)
    }

}