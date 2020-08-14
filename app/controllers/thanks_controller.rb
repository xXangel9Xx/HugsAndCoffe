class ThanksController < ApplicationController
   before_action :params_create, only:[:create]
   before_action :user_bank_account, only:[:new]

   def index
      @thanks = Thank.all
   end 

   def new
      @thank = Thank.new
   end
   
    def create 
       @thank = Thank.new(params_create)
       @thank.perfil_id = params[:perfil_id]
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
     # :perfil_id,
      params.require(:thank).permit(:value_coffes,:hug,:name,:ocupacion,:message)
    end
    def user_bank_account
      @user_bank_account = User.find_by(id: params[:perfil_id]).bank_account.all
    end
end
