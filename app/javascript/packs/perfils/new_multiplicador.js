export default function Multiplicador(){
    this.context = function(){
        return document.querySelector("[data-context]").dataset['context'];
    };

    this.multiplicador= function(){ 
        let valueMultiplication = document.getElementsByClassName('valueMultipl');
        let input_coffe_value = document.getElementById('monto-coffe-value');
        
        for(let i = 0; i < valueMultiplication.length; i+=1){
              valueMultiplication[i].addEventListener('click', (e)=>{
                        input_coffe_value.value = valueMultiplication[i].dataset.value * input_coffe_value.value 
              },true);
        };
    };
}