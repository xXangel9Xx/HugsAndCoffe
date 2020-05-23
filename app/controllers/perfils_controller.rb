class PerfilsController < ApplicationController
    #before_action :authenticate_user!
    before_action :params_create, only: [:create]
    before_action :search, only: [:update,:destroy,:show]
    before_action :params_update, only:[:update]
    def new 
        @perfil = Perfil.new
    end

    def create
     @perfil = Perfil.new(params_create)
        if @perfil.save
            render js:"alert('Se a creado el perfil correctamente')"
        else
            render js: "alert('Lamentamos informar que a ocurrido un error')"
        end
    end

    def show
        render @perfil
    end

    def destroy
        render @perfil.delete
    end

    def update
     if @perfil.update(params_update)
        render js: "alert('Se actualizo correctamente')"
     else
        render js: "alert('Lamentamos informar que a ocurrido un error')"
     end
    end
    private 
    def params_create
        params.require(:perfils).permit(:full_name, :ocupacion ,:biografia, :image)
    end 
#:user_id,
    def params_update
        params.require(:perfils).permit(:full_name, :ocupacion,:biografia )
    end

    def search 
        @perfil = Perfil.find_by( id: params[:id] )
    end
end