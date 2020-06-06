class EstadosController < ApplicationController
 before_action :params_create, only:[:create]
 before_action :params_update, only:[:update]
 before_action :search, only:[:update,:destroy,:show]
    def new 
        @estado = Estado.new
    end
 
    def create 
     @estado = Estado.new(params_create)
        if @estado.save 
            flash[:notice] = "Su estado fue realizado exitosamente"
            redirect_to estados_path
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
            redirect_to estados_path
        end
    end

   def index
     @estado = Estado.all 
   end
   
   def edit
   end

   def update 
        if @estado.update(params_update)
            flash[:notice] = "su cuenta fue creada exitosamente"
            redirect_to estados_path
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
            redirect_to estados_path
        end
    end

    def show
        @estado
    end

    def destroy
        @estado.delete
    end
  
    private

        def params_create
            params.require(:estado).permit(:description, images:[])
        end

        def params_update
            params.require(:estado).permit(:description, images:[])
        end

        def search
            @estado = Estado.find_by( id: params[:id] )
        end
end
