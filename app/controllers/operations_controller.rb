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
        render js: "alert('Se realizo su operacion correctamente')"
       else
        render js: "alert('Lamentablemente ocurrio un error')"
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
            render js: "alert('Se actualizo correctamente')"
        else
            render js: "alert('Lamentamos informar que no se puedo actualizar correctamente')" 
        end
    end

    private

     def params_create
        params.require(:operations).permit(:comentario, :correo, :estado_id, :thank_id)
     end
 
     def params_update
         params.require(:operations).permit(:comentario, :correo)
     end
 
     def search
         @estado = Estado.find_by( id: params[:id] )
     end

end
