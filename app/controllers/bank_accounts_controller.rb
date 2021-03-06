class BankAccountsController < ApplicationController
    before_action :authenticate_user!, only: [:create,:update,:destroy]
    before_action :params_create, only: [:create]
    #before_action :params_update, only: [:update]
    before_action :search, only: [:show,:update,:edit,:destroy]
    
    def new
     @bank_account = BankAccount.new
    end
    
    def index
        perfil = Perfil.find_by(id: params[:perfil_id])
        @bank_accounts = User.find_by(id: perfil.user_id).bank_account.all
    end

    def show
      return @bank_account if @bank_account
      redirect_to errors_path
    end

    def create
        @bank_account = BankAccount.new(params_create)
        @bank_account.user_id = current_user.id
        if @bank_account.save
            flash[:notice] = "Su cuenta fue creada exitosamente"
            redirect_to perfil_bank_accounts_path(current_user.id)
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
            redirect_to new_perfil_bank_account_path(current_user.id)
        end
    end
   def update
    if @bank_account
        if @bank_account.update(params_create)
            flash[:notice] = "Fue editado exitosamente"
            redirect_to perfil_bank_accounts_path(current_user.id)
        else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
            redirect_to new_perfil_bank_account_path(current_user.id)
        end
    else
        redirect_to errors_path
    end
   end
  
    def edit  
     return @bank_account  if @bank_account  
     redirect_to errors_path
    end

    private
    def search
        @bank_account = BankAccount.find_by( id: params[:id] )
    end

    def params_create
        params.require(:bank_account).permit(:entidad,:email,:account,:identification,:typeAccount)
    end

end
