export default function Nav(){
   
    this.context = function(){
       return document.querySelector("[data-context]").dataset['context'];
    };

   this.burger = function(){
      let burger = document.getElementById('menu-burger');
      let navCreateUsuario = document.getElementsByClassName('navCreateUsuario');
      let menu_movile = document.getElementsByClassName('class_movile');
      if(burger){
      burger.addEventListener('click', (e) => {
          for (let i = 0; i < navCreateUsuario.length; i+=1){
          navCreateUsuario[i].style.display = "none";
          }
          for (let i = 0; i < menu_movile.length; i+=1){
              menu_movile[i].style.display = 'block'
          };
      }, true);          
      }

    };
  
    this.exitMenuMovile = function(){
          let exit_menu_movile = document.getElementById('exit-menu-movile');
          let navCreateUsuario = document.getElementsByClassName('navCreateUsuario');
          let menu_movile = document.getElementsByClassName('class_movile');
            if(exit_menu_movile){
              exit_menu_movile.addEventListener('click', (e) => {
              for (let i = 0; i < menu_movile.length; i+=1){
                  menu_movile[i].style.display = "none";
              };
              for (let i = 0; i < navCreateUsuario.length; i+=1){
                  navCreateUsuario[i].style.display = "flex";
              };
    
          },true);   
            }   
         
    };

}
