class GaleryController < ApplicationController
   #before_action :authenticate_user!
   before_action :params_create, only:[:create]
   before_action :search, only:[:destroy]
   def create

   end

   def destroy

   end

   
   private
   
   def params_create
   
   end

   def search
   end
end
