export default function Show(){
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };

    this.carrucelMarkState = function(followerState,markIndexIdClass,markIndex){
        for(let i = 0; i < followerState.length;i+=1){
            followerState[i].addEventListener('click',(e)=>{
                let markIndexState = document.querySelector(markIndexIdClass);    
                markIndexState.removeAttribute("id");
                followerState[i].setAttribute("id",markIndex)
            },true)
        }
    }

    this.carrucelIncrementIndexState = function(nextCarrucelThanks,followerState,statesIdLast,markIndexIdClass,markIndex){
        --statesIdLast
        nextCarrucelThanks.addEventListener('click',(e)=>{
            let positionNow = $(markIndexIdClass).index()
             ++positionNow
            if(positionNow < followerState.length){
                followerState[positionNow].setAttribute("id",markIndex);
                followerState[--positionNow].removeAttribute("id");
            } 
            else if(positionNow >= followerState[followerState.length-1].dataset.slideTo && followerState[followerState.length-1].dataset.slideTo >= statesIdLast){
                followerState[followerState.length-1].removeAttribute("id");
                for(let i = 0;i <= followerState.length-1; i+=1){
                    if(i == 0){
                        followerState[i].setAttribute("id",markIndex)
                        followerState[i].dataset.slideTo = i
                        followerState[i].innerHTML = `${i}`                        
                    }
                 followerState[i].dataset.slideTo = i
                 followerState[i].innerHTML = `${i}`
                }
            }
            else if(positionNow>=followerState[followerState.length-1].dataset.slideTo && followerState[followerState.length-1].dataset.slideTo < statesIdLast){
                 for(let i = 0; i <= followerState.length-1; i+=1){
                         let follower = parseInt(followerState[i].dataset.slideTo) 
                         follower+=1
                         followerState[i].dataset.slideTo = `${follower}`
                         followerState[i].innerHTML = `${follower}`
                 }
            }
         },true)
    }

    this.carrucelDecrementIndexState = function(backCarrucelState,followerState,statesIdLast,markIndexIdClass,markIndex){
        --statesIdLast
        backCarrucelState.addEventListener('click',(e)=>{
        let positionNow = $(markIndexIdClass).index()  
        if (positionNow == 0 ){ 
            for(let i=0; i   <= followerState.length-1; i+=1){
                    followerState[followerState.length-1-i].dataset.slideTo = `${statesIdLast-i}`
                    followerState[followerState.length-1-i].innerHTML = `${statesIdLast-i}`
                }
                followerState[followerState.length-1].setAttribute("id",markIndex);
                followerState[0].removeAttribute("id");
            }else {
                followerState[positionNow].removeAttribute("id");
                followerState[--positionNow].setAttribute("id",markIndex);  
            }
        },true)
    }
}

