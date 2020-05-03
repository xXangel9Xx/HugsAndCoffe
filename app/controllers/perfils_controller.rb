class PerfilsController < ApplicationController
    before_action :params_create, only: [:create]
    before_action :search, only: [:update,:destroy,:show]
    before_action :params_update, only:[:update]

    def create
     @perfil = Perfil.new(params_create)
        if @perfil.save
            render json: @perfil
        else
            render json:@perfil.errors.full_messages
        end
    end

    def show
        render json: @perfil
    end

    def destroy
        render json: @perfil.delete
    end

    def update
     if @perfil.update(params_update)
        render json: @perfil
     else
        render json: @perfil.errors.full_messages, status:400
     end
    end
    #render json: (@perfil.update(params_update))? @perfil : @perfil.errors.full_messages, status:400#creo que esto funciona sino se tiene que hacer con el if
    private 
    def params_create
        params.require(:perfils).permit(:user_id,:name,:last_name,:coffee, :hugs, :money, :image)
    end 

    def params_update
        params.require(:perfils).permit(:name,:last_name,:coffee,:hugs, :money)
    end

    def search 
        @perfil = Perfil.find_by( id: params[:id] )
    end
end