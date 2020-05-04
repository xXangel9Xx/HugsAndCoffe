class PerfilsController < ApplicationController
    #before_action :authenticate_user!


    before_action :params_create, only: [:create]
    before_action :search, only: [:update,:destroy,:show]
    before_action :params_update, only:[:update]

    def create
     @perfil = Perfil.new(params_create)
        if @perfil.save
            render @perfil
            #redirect_to ''
        else
            render 'new'
            #render json:@perfil.errors.full_messages
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
        render @perfil
     else
        render 'update'
        #render json: @perfil.errors.full_messages, status:400
     end
    end
    #render json: (@perfil.update(params_update))? @perfil : @perfil.errors.full_messages, status:400#creo que esto funciona sino se tiene que hacer con el if
    private 
    def params_create
        params.require(:perfils).permit(:user_id,:full_name, :ocupacion ,:biografia, :image)
    end 
#,:coffee, :hugs esta va en create  , esta va en update coffee,:hugs, :money, estas 2 las quitare por ahora
    def params_update
        params.require(:perfils).permit(:full_name, :ocupacion,:biografia )
    end

    def search 
        @perfil = Perfil.find_by( id: params[:id] )
    end
end