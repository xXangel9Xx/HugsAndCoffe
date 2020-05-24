class EstadosController < ApplicationController
before_action :params_create, only: [:create]
before_action :params_update, only: [:update]
before_action :search, only: [:update,:destroy,:show]
    def new
      @estado = Estado.new
    end
    
    def create
          @estado = Estado.new(params_create)
          if @estado.save
            render js: "alert('Se creo correctamente')"
          else
            render js: "alert('Lamentablemente ocurrio un error')"
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
          render js: "alert('Se actualizo correctamente')"  
      else
          render js: "alert('Lamentablemente ocurrio un error')"
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
