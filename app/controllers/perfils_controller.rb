class PerfilsController < ApplicationController
    before_action :authenticate_user!, only: [:create,:uptade]
    before_action :params_create, only: [:create]
    before_action :params_update, only:[:update]
    before_action :search, only: [:update,:destroy,:show]
    before_action :images, only: [:show]

    def index
      @perfils = Perfil.all
    end

    def new 
     @perfil = Perfil.new
    end

    def create
     @perfil = Perfil.new(params_create)
     @perfil.user_id = current_user.id
     @perfil.id = current_user.id
        if @perfil.save
            flash[:notice] = "Su perfil fue creada exitosamente"
            redirect_to @perfil
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
            redirect_to new_perfil_path
        end
    end

    def show
        @perfil
    end

    def edit
    end

    def update
     if @perfil.update(params_update)
        flash[:notice] = "Su perfil fue actualizado exitosamente"
        #redirect_to 'path'
     else
        flash[:notice] = "Lamentamos informar que ha ocurrido un error"
        #redirect_to 'path'
     end
    end
    private 
    def params_create
        params.require(:perfil).permit(:full_name, :ocupacion ,:biografia, :amountCoffe,:currencySymbol,:image)
    end 

    def params_update
        params.require(:perfil).permit(:full_name, :ocupacion,:biografia,:amountCoffe,:currencySymbol,:image)
    end

    def search 
        @perfil = Perfil.find_by( id: params[:id])
    end

    def images 
        array = []
        images = []
        array << Perfil.find_by(id: params[:id]).galery.all
        large = array[0].length
        for i in 0...large
           images << Perfil.find_by(id: params[:id]).galery[i].image
   
        end
        gon.watch.states = images

     end
end