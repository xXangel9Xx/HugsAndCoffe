class ThanksController < ApplicationController
   before_action :params_create, only:[:create]
   def new
      @thank = Thank.new
   end
   
    def create 
       @thank = Thank.new(params_create)
       if @thank.save
        render js:"alert('Se creo correctamente')"
       else
        render js: "alert('Lamentamos informar que ocurrio un error')"
       end
    end
    
    private

    def params_create
      params.require(:thanks).permit(:coffee,:hug)
    end
end
