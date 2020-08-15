export default function MultiplicatorCoffe(){
    this.context = function(){
        return document.querySelector("[data-context]").dataset['context'];
    }
    this.multiplicadorCoffe = function (){
    let valueMultiplication = document.getElementsByClassName('valueMultipl');
    let valueAmountCoffe = document.getElementById('total-pay');
      console.log(valueAmountCoffe)
    /* 
    for(let i = 0; i < valueMultiplication.length; i+=1){
        valueMultiplication[i].addEventListener('click', (e)=>{
                   = valueMultiplication[i].dataset.value * 
        },true);
  };*/
    };
}
