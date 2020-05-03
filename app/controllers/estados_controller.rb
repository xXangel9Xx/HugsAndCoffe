class EstadosController < ApplicationController
before_action :params_create, only: [:create]
before_action :params_update, only: [:update]
before_action :search, only: [:update,:destroy,:show]
    def create
          @estado = Estado.new(params_create)
          if @estado.save
            render json:@estado
          else
            render json:@estado.errors.full_messages
          end
    end

    def show
         render json: @estado
    end

    def index
        @estado = Estado.all
       render json: @estado
    end

    def destroy
      render json: @estado.delete
    end

    def update
      if @estado.update(params_update)
          render json: @estado  
      else
        render json: @estado.errors.full_messages, status:400
      end
    end

    private

    def params_create
       params.require(:estados).permit(:description, :perfil_id ,:coffee,:hugs)
    end

    def params_update
        params.require(:estados).permit(:description)
    end

    def search
        @estado = Estado.find_by( id: params[:id] )
    end

end
