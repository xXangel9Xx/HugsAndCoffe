class OperationsController < ApplicationController
    before_action :params_create, only: [:create]
    before_action :params_update, only: [:update]
    before_action :search, only: [:update,:destroy,:show]

    def create
       @realizado = false
       operations = Operation.new(params_create)
    #   @realizado = Operation.transaction(operations)
       if @realizado == true && operations.save
        render json: operations
       else
        render json: operation_valid.errors.full_messages 
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
            render json: @operation
        else
            srender json: @operation.errors.full_messages, status:400
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
