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
            render js: "alert('Se guardo correctamente')"
        else
            render js: "alert('Lamentamos informar que ocurrio un error')"
        end
    end

    def update
        if @bankAccount.update(params_update)
            render js: "alert('Se logro actualizar correctamente')"
        else
            render js: "alert('Lamentamos informar que ocurrio un eror')"
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
          params.require(:bankAccounts).permit(:entidad,:email,:account,:identification,:typeAccount)
    end

    def params_update
        params.require(:bankAccounts).permit(:entidad,:email,:account,:identification,:typeAccount)
    end
end
