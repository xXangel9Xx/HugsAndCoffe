class BankAccountController < ApplicationController #ojo con el nombre de la clase debe ser Bank_Account
    #before_action :authenticate_user!
    before_action :params_create, only: [:create]
    before_action :params_update, only: [:update]
    before_action :search, only: [:update,:destroy]
    
    def new
    @bank_Account = Bank_Account.new
    end

    def create
        @bank_Account = BankAccount.new(params_create)
        if @bank_Account.save
            render js: "alert('Se guardo correctamente')"
        else
            render js: "alert('Lamentamos informar que ocurrio un error')"
        end
    end

    def update
        if @bank_Account.update(params_update)
            render js: "alert('Se logro actualizar correctamente')"
        else
            render js: "alert('Lamentamos informar que ocurrio un eror')"
        end

    end

    def destroy
       render @bank_Account.delete
    end

 
    private
    def search
        @bank_Account = BankAccount.find_by( id: params[:id] )
    end

    def params_create
          params.require(:bank_Account).permit(:entidad,:email,:account,:identification,:typeAccount)
    end

    def params_update
        params.require(:bank_Account).permit(:entidad,:email,:account,:identification,:typeAccount)
    end
end
