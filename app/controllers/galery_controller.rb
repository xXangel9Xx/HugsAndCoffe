class GaleryController < ApplicationController
   #before_action :authenticate_user!
   before_action :params_create, only:[:create]
   before_action :search, only:[:destroy]
   def index
      @galery = Galery.all
   end

   def create

   end

   def destroy

   end

   
   private
   
   def params_create
    params.require(:galery).permit()
   end

   def search
      @galery = Galery.findy_by( id: params[:id] )
   end
end
