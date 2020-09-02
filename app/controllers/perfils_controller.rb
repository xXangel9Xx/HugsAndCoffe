class PerfilsController < ApplicationController
    before_action :authenticate_user!, only: [:create,:uptade]

    before_action :search, only: [:edit,:update,:destroy,:show]    
    before_action :params_create, only: [:create]
    before_action :params_update, only:[:update]

   
   
    before_action :states, only: [:show]
    before_action :thanks, only: [:show]
    before_action :editOrNot, only: [:show]


    def new 
     @perfil = Perfil.new
    end

    def create
     @perfil = Perfil.new(params_create)
     @perfil.user_id = current_user.id
    # @perfil.id = current_user.id
        if @perfil.save
            flash[:notice] = "Su perfil fue creada exitosamente"
            redirect_to perfil_path(@perfil)
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
            redirect_to new_perfil_path
        end
    end

    def show
        return  @perfil if @perfil
        redirect_to errors_path
    end

    def edit
    end

    def update
      if @perfil
        if @perfil.update(params_update)
            flash[:notice] = "Su perfil fue actualizado exitosamente"
            redirect_to perfil_path(current_user.id)
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
            redirect_to perfil_path(current_user.id)
        end
      else
        redirect_to errors_path
      end
    end
    private 

    def search 
        @perfil = Perfil.find_by(id:params[:id])
    end  

    def params_create
        params.require(:perfil).permit(:public,:full_name, :ocupacion ,:biografia, :amountCoffe,:currencySymbol,:image)
    end 

    def params_update
        params.require(:perfil).permit(:public,:full_name, :ocupacion,:biografia,:amountCoffe,:currencySymbol,:image)
    end




    def states 
        begin
        gon.watch.statesIdLast = Perfil.find_by( id: params[:id]).galery.last.id if Perfil.find_by(id: params[:id]).galery.all.exists? 
        gon.watch.thanksIdLast = Perfil.find_by( id: params[:id]).thank.last.id if Perfil.find_by(id: params[:id]).thank.all.exists? 
        @states = Perfil.find_by(id: params[:id]).galery.all            
        rescue => exception
            
        end

    end

    def thanks
        begin
            @thankPerfil = Perfil.find_by(id:params[:id]).thank.all           
        rescue => exception
            
        end
       
    end

    def editOrNot
       @edit_or_not = User.find_by(id: current_user.id).perfil.id == Perfil.find_by(id:params[:id]).id if user_signed_in?
    end
end  
