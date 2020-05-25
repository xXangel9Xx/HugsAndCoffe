class OperationsController < ApplicationController
    before_action :params_create, only: [:create]
    before_action :params_update, only: [:update]
    before_action :search, only: [:update,:destroy,:show]

    def new
       @operation = Operation.new
    end


    def create
       @realizado = false
       @operation = Operation.new(params_create)
    #   @realizado = Operation.transaction(operations)
       if @realizado == true && @operation.save
         flash[:notice] = "Su operacion fue realizada fue creada exitosamente"
         #redirect_to 'path'
       else
         flash[:notice] = "Lamentamos informar que ha ocurrido un error"
         #redirect_to 'path'
       end
    end

    def show
       render json:@operation
    end

    def index
       @operation = Operation.all
       render json:@operation
    end

    def destroy
      render json: @operation.delete
    end

    def update
        if @operation.update(params_update)
           flash[:notice] = "La acutalizacion de su operacion fue realizada fue creada exitosamente"
           #redirect_to 'path'
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
            #redirect_to 'path'
        end
    end

    private

     def params_create
        params.require(:operation).permit(:comentario, :correo, :estado_id, :thank_id)
     end
 
     def params_update
         params.require(:operation).permit(:comentario, :correo)
     end
 
     def search
         @estado = Estado.find_by( id: params[:id] )
     end

end
