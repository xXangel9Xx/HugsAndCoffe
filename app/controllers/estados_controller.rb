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
            flash[:notice] = "Su estado fue realizado exitosamente"
            #redirect_to 'path'
          else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
            #redirect_to 'path'
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
          flash[:notice] = "su cuenta fue creada exitosamente"
          #redirect_to 'path'
      else
          flash[:notice] = "Lamentamos informar que ha ocurrido un error"
          #redirect_to 'path'
      end
    end

    private

    def params_create
       params.require(:estado).permit(:description, :perfil_id ,:coffee,:hugs)
    end

    def params_update
        params.require(:estado).permit(:description)
    end

    def search
        @estado = Estado.find_by( id: params[:id] )
    end

end
