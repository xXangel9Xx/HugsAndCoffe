class PerfilsController < ApplicationController
    before_action :authenticate_user!, only: [:create,:uptade]
    before_action :params_create, only: [:create]
    before_action :params_update, only:[:update]
    before_action :search, only: [:update,:destroy,:show]
    before_action :states, only: [:show]

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

    def states 
        @states = Perfil.find_by(id: params[:id]).galery.all
    end
end  
#      array = []
#        subtitle = []
#        signed_id = []
#        filename = []
#        array << Perfil.find_by(id: params[:id]).galery.all
#        large = array[0].length
#        for i in 0...large
#           subtitle << Perfil.find_by(id: params[:id]).galery[i].subtitulo
#           signed_id << Perfil.find_by(id: params[:id]).galery[i].image.signed_id
#           filename << Perfil.find_by(id: params[:id]).galery[i].image.filename
#        end
#        gon.watch.subtitle = subtitle
#        gon.watch.signedId = signed_id 
#        gon.watch.filename = filename
#        gon.watch.large = large