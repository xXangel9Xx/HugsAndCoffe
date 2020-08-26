// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery 
//= require jquery_ujs 
//= require popper
//= require bootstrap
import 'bootstrap'
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


import LoadContent from "../utils"
import NewPerfil from "./perfils/new"
import Nav from "./main/nav"
import Multiplicador from './perfils/new_multiplicador'
import HugsOrCoffe from "./thanks/thanks_new"
import Hug from "./thanks/hug_new"
import MultiplicadorCoffe from "./thanks/multiplicator_coffe"
import Show from "./perfils/show"
import Error from "./error/error"
import "controllers"
//import "stylesheets/application"

const load = new LoadContent()

//document.addEventListener('turbolinks:load', function (){console.log('nose')})

load.ready(function(){


const nav = new Nav()
 if (nav.context() == 'general--nav'){
   try {
     nav.burger()
     nav.exitMenuMovile()     
   } catch (error) {
     console.log(error.message)
   }

 };
const newPerfil = new NewPerfil()
if (newPerfil.context() == 'general--nav'){
  try {
  newPerfil.publicFalseToTruePerfil()
  newPerfil.publicTrueToFalsePerfil()    
  } catch (error) {
    console.log(error.message)
  }

}

 const multiplicadorPerfil = new Multiplicador()
 if (multiplicadorPerfil.context() == 'general--nav'){
   try {
     multiplicadorPerfil.multiplicador()     
   } catch (error) {
     console.log(error.message)
   }

 };

const multiplicadorCoffe = new MultiplicadorCoffe()
if (multiplicadorCoffe.context() == 'thanks--new'){
  try {
  multiplicadorCoffe.multiplicadorCoffe()    
  } catch (error) {
    console.log(error.message)
  }


}

const hugsOrCoffe = new HugsOrCoffe()
 if (hugsOrCoffe.context() == 'thanks--new'){
   try {
    hugsOrCoffe.selectionFormCoffe()
    hugsOrCoffe.selectionFormHug()
    hugsOrCoffe.containerFollowing()
    hugsOrCoffe.exitThankCoffe()
    hugsOrCoffe.exitHug()
    hugsOrCoffe.exitFormHug()     
   } catch (error) {
     console.log(error.message)
   }

 };
const hug = new Hug 

 if (hug.context() == 'thanks--new'){
   try {
   hug.hugSeconds()     
   } catch (error) {
    console.log(error.message) 
   }


 };

 const show = new Show()
if (show.context()=='perfil--nav'){
    ///////////////////////////////////////////>>>>>>>>Carrucel States<<<<<<</////////////////////////////////////////
    ///////////////////////////////////////////>>>>>>>>Carrucel States<<<<<<</////////////////////////////////////////
      ///////////////////////////////////////////>>>>>>>>Carrucel States<<<<<<</////////////////////////////////////////
        ///////////////////////////////////////////>>>>>>>>Carrucel States<<<<<<</////////////////////////////////////////
      ///////////////////////////////////////////>>>>>>>>Carrucel States<<<<<<</////////////////////////////////////////
    ///////////////////////////////////////////>>>>>>>>Carrucel States<<<<<<</////////////////////////////////////////
  ///////////////////////////////////////////>>>>>>>>Carrucel States<<<<<<<///////////////////////////////////////// 
  let followerState = document.getElementsByClassName('follower-state');
  let markIndexIdClass = "#mark-index-states.follower-state";
  let markIndex = "mark-index-states";
  let nextCarrucelState = document.getElementById('next-carrucel-state');
  let statesIdLast = gon.statesIdLast;
    let backCarrucelState = document.getElementById('back-carrucel-state');
    if(statesIdLast){
      try {
       show.carrucelMarkState(followerState,markIndexIdClass,markIndex);
       show.carrucelIncrementIndexState(nextCarrucelState,followerState,statesIdLast,markIndexIdClass,markIndex)
       show.carrucelDecrementIndexState(backCarrucelState,followerState,statesIdLast,markIndexIdClass,markIndex) 
            
      } catch (error) {
        console.log(error.message)
      }

      }
  ///////////////////////////////////////////>>>>>>>>Carrucel Thanks<<<<<<</////////////////////////////////////////
    ///////////////////////////////////////////>>>>>>>>Carrucel Thanks<<<<<<</////////////////////////////////////////
      ///////////////////////////////////////////>>>>>>>>Carrucel Thanks<<<<<<</////////////////////////////////////////
        ///////////////////////////////////////////>>>>>>>>Carrucel Thanks<<<<<<</////////////////////////////////////////
      ///////////////////////////////////////////>>>>>>>>Carrucel Thanks<<<<<<</////////////////////////////////////////
    ///////////////////////////////////////////>>>>>>>>Carrucel Thanks<<<<<<</////////////////////////////////////////
  ///////////////////////////////////////////>>>>>>>>Carrucel Thanks<<<<<<<///////////////////////////////////////// 
  let followerThanks = document.getElementsByClassName('follower-thanks');
  let markIndexThanks = "#mark-index-thanks.follower-thanks";
  let markIndexid  = "mark-index-thanks";
  let nextCarrucelThanks = document.getElementById('next-carrucel-thanks');
  let thanksIdLast = gon.thanksIdLast;
  let backCarrucelThanks = document.getElementById('back-carrucel-thanks');  
  if(thanksIdLast){
    try {
    show.carrucelMarkState(followerThanks,markIndexThanks,markIndexid,statesIdLast)
    show.carrucelIncrementIndexState(nextCarrucelThanks,followerThanks,thanksIdLast,markIndexThanks,markIndexid)
    show.carrucelDecrementIndexState(backCarrucelThanks,followerThanks,thanksIdLast,markIndexThanks,markIndexid)        
    } catch (error) {
      console.log(error.message)
    }
  
  }
 try {
  nav.burger()
  nav.exitMenuMovile()   
 } catch (error) {
   console.log(error.message)
 }


};

const error = new Error()
if(error.context() =='error--error'){
   error.ip()
   error.ipPublic()
}
});




