class GaleriesController < ApplicationController
        before_action :authenticate_user!, only:[:create,:update,:destroy]
        before_action :params_create, only:[:create]
        before_action :params_update, only:[:update]
        before_action :search, only:[:destroy,:update,:edit,:show]
        def new
            @galery = Galery.new
        end
  
        def create
           @galery = Galery.new(params_create)
           @galery.perfil_id = current_user.id
           if @galery.save
               flash[:notice] = "Su foto fue creada exitosamente"
               redirect_to perfil_galeries_path(current_user.id)
           else
               flash[:alert] = "Lamentamos informar que ha ocurrido un error"
               redirect_to new_perfil_galery_path
           end
        end
        
        def show
           @galery
        end

        def edit
        end

        def update
            if @galery.update(params_update)
               flash[:notice] = "Su foto fue actualizada exitosamente"
               redirect_to perfil_galeries_path(current_user.id)
            else
               flash[:alert] = "Lamentamos informar que ha ocurrido un error"
               redirect_to '/galeries'
            end
        end
        
        def destroy
           @galery
        end
     
        def index
          perfil = Perfil.find_by(id: current_user.id)    
          @galeries = perfil.galery.all
        end
     
        private


        def params_create
         params.require(:galery).permit(:subtitulo, :image)
        end
  
        def params_update
         params.require(:galery).permit(:subtitulo, :image)
        end
  
        def search
           @galery = Galery.find_by( id: params[:id] )
        end
     
end
