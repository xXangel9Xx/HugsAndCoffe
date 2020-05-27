class BankAccountsController < ApplicationController
    #before_action :authenticate_user!
    before_action :params_create, only: [:create]
    #before_action :params_update, only: [:update]
    before_action :search, only: [:show,:update,:edit,:destroy]
    
    def new
     @bank_account = BankAccount.new
    end
    
    def index
     @bank_accounts = BankAccount.all
    end

   def show
      render @bank_account
   end

    def create
        @bank_account = BankAccount.new(params_create)
        if @bank_account.save
            flash[:notice] = "Su cuenta fue creada exitosamente"
            redirect_to '/bank_accounts'
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
             #redirect_to 'path'
        end
    end
   def update
        if @bank_account.update(params_update)
            flash[:notice] = "Fue editado exitosamente"
             #redirect_to 'path'
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
             #redirect_to 'path'
        end
   end

    def edit    
    end

    def destroy
       render @bank_account.delete
    end

 
    private
    def search
        @bank_account = BankAccount.find_by( id: params[:id] )
    end

    def params_create
          params.require(:bank_account).permit(:entidad,:email,:account,:identification,:typeAccount)
    end

    def params_update
       params.require(:bank_account).permit(:entidad,:email,:account,:identification,:typeAccount)
    end
end
