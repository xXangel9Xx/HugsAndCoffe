export default function Show(){
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };

}

