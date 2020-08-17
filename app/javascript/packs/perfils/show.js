export default function Show(){
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };

    this.carrucelMarkState = function(){
        let followerState = document.getElementsByClassName('follower-state');
        for(let i = 0; i < followerState.length;i+=1){
            followerState[i].addEventListener('click',(e)=>{
                let markIndexState = document.querySelector("#mark-index-states.follower-state");    
                markIndexState.removeAttribute("id");
                followerState[i].setAttribute("id","mark-index-states");
            },true)
        }
        
    this.CarrucelIncrementIndexState = function(){
         let nextCarrucelState = document.getElementById('next-carrucel-state');
         let followerState = document.getElementsByClassName('follower-state');  
         let statesLength = gon.statesLength

        nextCarrucelState.addEventListener('click',(e)=>{
            let positionNow = $("#mark-index-states.follower-state").index()
             ++positionNow
            if(positionNow < followerState.length){
                followerState[positionNow].setAttribute("id","mark-index-states");
                followerState[--positionNow].removeAttribute("id");

            } /*
            else if(positionNow>=followerState[followerState.length].dataset.slideTo && positionNow <= statesLength){

            }*/

            
            else if(positionNow >= statesLength){
                followerState[followerState.length-1].removeAttribute("id");
                followerState[0].setAttribute("id","mark-index-states");
            }
           
         },true)
    }

    this.CarrucelDecrementIndexState = function(){
        let backCarrucelState = document.getElementById('back-carrucel-state')
        let followerState = document.getElementsByClassName('follower-state'); 
        
        backCarrucelState.addEventListener('click',(e)=>{
            let positionNow = $("#mark-index-states.follower-state").index()
            followerState[positionNow].removeAttribute("id");
            followerState[--positionNow].setAttribute("id","mark-index-states");
        },true)
    }





        /*  //  let markIndexState = document.querySelector("#mark-index-states.follower-state"); 
            //let item = document.getElementsByClassName('item').length;       
            console.log(followerState[i].dataset.slideTo)
         console.log(nex)
+ 1               let nex = $('div.active').index() ;
        var currentItem = $("#myCarouselThanks .item.active" );
        var currentIndex = $('#carousel-1 .item').index(currentItem) + 1;

                let backPng = document.getElementsByClassName('back-carrucel')
        let nexPng = document.getElementsByClassName('next-carrucel')
        let nex 
        let back
        function indexNex(){
            nex = $('div.active').index() + 1;
             
        }
        function indexBack(){
            back = $('div.active').index() + 1;
        }
  

        for(let i = 0; i< backPng.length;i+=1){
            backPng[i].addEventListener('click',(e)=>{
                indexBack()
            },true)
        }

        for(let i = 0; i< nexPng.length;i+=1){
            nexPng[i].addEventListener('click',(e)=>{
                indexNex()
            },true)
        }
        //setInterval(indexActive,1000)
        //console.log(active)
        //console.log('este es el item ' + item)

     */   
    }

}

