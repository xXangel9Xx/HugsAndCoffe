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

const load = new LoadContent()

//document.addEventListener('turbolinks:load', function (){console.log('nose')})

load.ready(function(){


const nav = new Nav()
 if (nav.context() == 'general--nav'){
     nav.burger()
     nav.exitMenuMovile()
 };
const newPerfil = new NewPerfil()
if (newPerfil.context() == 'general--nav'){
  newPerfil.publicFalseToTruePerfil()
  newPerfil.publicTrueToFalsePerfil()
}

 const multiplicadorPerfil = new Multiplicador()
 if (multiplicadorPerfil.context() == 'general--nav'){
     multiplicadorPerfil.multiplicador()
 };

const multiplicadorCoffe = new MultiplicadorCoffe()
if (multiplicadorCoffe.context() == 'thanks--new'){
  multiplicadorCoffe.multiplicadorCoffe()

}

const hugsOrCoffe = new HugsOrCoffe()
 if (hugsOrCoffe.context() == 'thanks--new'){
    hugsOrCoffe.selectionFormCoffe()
    hugsOrCoffe.selectionFormHug()
    hugsOrCoffe.containerFollowing()
    hugsOrCoffe.exitThankCoffe()
    hugsOrCoffe.exitHug()
    hugsOrCoffe.exitFormHug()
 };
const hug = new Hug 

 if (hug.context() == 'thanks--new'){
   hug.hugSeconds()
  /*hug.animationHug()*/
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
       show.carrucelMarkState(followerState,markIndexIdClass,markIndex);
       show.carrucelIncrementIndexState(nextCarrucelState,followerState,statesIdLast,markIndexIdClass,markIndex)
       show.carrucelDecrementIndexState(backCarrucelState,followerState,statesIdLast,markIndexIdClass,markIndex) 
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
    show.carrucelMarkState(followerThanks,markIndexThanks,markIndexid,statesIdLast)
    show.carrucelIncrementIndexState(nextCarrucelThanks,followerThanks,thanksIdLast,markIndexThanks,markIndexid)
    show.carrucelDecrementIndexState(backCarrucelThanks,followerThanks,thanksIdLast,markIndexThanks,markIndexid)    
  }
 
  nav.burger()
  nav.exitMenuMovile()

};

});




