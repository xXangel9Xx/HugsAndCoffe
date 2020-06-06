export default function Perfils(){
    this.context = function(){
        return document.querySelector("[data-context]").dataset['context'];
    };
    
}