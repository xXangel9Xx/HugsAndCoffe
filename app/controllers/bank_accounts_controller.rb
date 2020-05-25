class BankAccountsController < ApplicationController
    #before_action :authenticate_user!
    before_action :params_create, only: [:create]
    before_action :params_update, only: [:update]
    before_action :search, only: [:update,:destroy]
    
    def new
     @bankAccount = BankAccount.new
    end
    
    def index
     @bankAccounts = BankAccount.all
    end

    def create
        @bankAccount = BankAccount.new(params_create)
        if @bankAccount.save
            flash[:notice] = "Su cuenta fue creada exitosamente"
            #redirect_to 'path'
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
             #redirect_to 'path'
        end
    end

    def edit
        if @bankAccount.update(params_update)
            flash[:notice] = "Fue editado exitosamente"
             #redirect_to 'path'
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
             #redirect_to 'path'
        end
    end

    def destroy
       render @bankAccount.delete
    end

 
    private
    def search
        @bankAccount = BankAccounts.find_by( id: params[:id] )
    end

    def params_create
          params.require(:bankAccount).permit(:entidad,:email,:account,:identification,:typeAccount)
    end

    def params_update
        params.require(:bankAccount).permit(:entidad,:email,:account,:identification,:typeAccount)
    end
end
