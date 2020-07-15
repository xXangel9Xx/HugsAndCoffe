class ThanksController < ApplicationController
   before_action :params_create, only:[:create]
   def index
      @thanks = Thank.all
   end 

   def new
      @thank = Thank.new
   end
   
    def create 
       @thank = Thank.new(params_create)
       if @thank.save
         flash[:notice] = "Su agradecimiento se realizo correctamente"
         #redirect_to 'path'
       else
         flash[:notice] = "Lamentamos informar que ha ocurrido un error"
         #redirect_to 'path'
       end
    end
    
    private

    def params_create
      
      params.require(:thank).permit(:perfil_id,:value_coffes,:hug,:name,:ocupacion,:message)
    end
end
