export default function Show(){
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };

    this.carrucel = function(){
        let active = $('div.active').index() + 1;
        let item = document.getElementsByClassName('item').length;
        console.log('este es el item ' + item)
        
        console.log(active)
        
    }
}

