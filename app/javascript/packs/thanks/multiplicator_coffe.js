export default function MultiplicatorCoffe(){
    this.context = function(){
        return document.querySelector("[data-context]").dataset['context'];
    }
    this.multiplicadorCoffe = function (){
    let valueMultiplication = document.getElementsByClassName('multiplcationCoffe');
    let valueAmountCoffeContainer = document.getElementById('total-pay')
    let coffeValue = document.getElementById("coffe-value");
    let valueAmountCoffe = document.getElementById('total-pay').textContent;
    valueAmountCoffe = parseInt(valueAmountCoffe)
    console.log(coffeValue)

    for(let i = 0; i < valueMultiplication.length; i+=1){
        valueMultiplication[i].addEventListener('click', (e)=>{
          valueAmountCoffe = valueMultiplication[i].dataset.value * valueAmountCoffe
          coffeValue.value = valueMultiplication[i].dataset.value
          valueAmountCoffeContainer.innerHTML = `total:${valueAmountCoffe}`
  
        },true);
    };

    };
}
