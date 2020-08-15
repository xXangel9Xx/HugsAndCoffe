class ThanksController < ApplicationController
   before_action :params_create, only:[:create]
   before_action :user_bank_account, only:[:new]
   before_action :get_id, only:[:new]
   def index
      @thanks = Thank.all
   end 

   def new
      @thank = Thank.new
   end
   
    def create 
       @thank = Thank.new(params_create)
       @thank.perfil_id = get_id()
       if @thank.save
         flash[:notice] = "Su agradecimiento se realizo correctamente"
         redirect_to perfil_path(@thank.perfil_id)
       else
         flash[:notice] = "Lamentamos informar que ha ocurrido un error"
         redirect_to perfil_path(@thank.perfil_id)
       end
    end
    
    private

    def params_create
      params.require(:thank).permit(:value_coffes,:hug,:name,:ocupacion,:message)
    end
    def user_bank_account
      @user_bank_account = User.find_by(id: params[:perfil_id]).bank_account.all
    end
    def get_id
         Perfil.find_by(params[:id]).id
    end
    
end
