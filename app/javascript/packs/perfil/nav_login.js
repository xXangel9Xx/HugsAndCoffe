export default function PerfilNav(){
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };
}
