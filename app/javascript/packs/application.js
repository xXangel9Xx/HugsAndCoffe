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
import Nav from "./general/nav"
import Multiplicador from './general/new_multiplicador'
import HugsOrCoffe from "./thanks/thanks_new"
import Hug from "./thanks/hug_new"
import Show from "./perfils/show"

const load = new LoadContent()

//document.addEventListener('turbolinks:load', function (){console.log('nose')})

load.ready(function(){


const nav = new Nav()

 if (nav.context() == 'general--nav'){
     nav.burger()
     nav.exitMenuMovile()
     
 };



 const multiplicadorPerfil = new Multiplicador()
 if (multiplicadorPerfil.context() == 'general--nav'){
     multiplicadorPerfil.multiplicador()
 };

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
  nav.burger()
  nav.exitMenuMovile()

};

});




