class GaleriesController < ApplicationController
        #before_action :authenticate_user!
        before_action :params_create, only:[:create]
        before_action :params_update, only:[:update]
        before_action :search, only:[:destroy,:update,:edit,:show]
        def new
            @galery = Galery.new
        end
  
        def create
           @galery = Galery.new(params_create)
           if @galery.save
            flash[:notice] = "Su perfil fue creada exitosamente"
               redirect_to '/galeries'
           else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
               redirect_to '/galeries'
           end
        end
        
        def show
           @galery
        end

        def edit
        end

        def update
            if @galery.update(params_update)
               flash[:notice] = "Su perfil fue creada exitosamente"
               redirect_to '/galeries'
            else
               flash[:notice] = "Lamentamos informar que ha ocurrido un error"
               redirect_to '/galeries'
            end
        end
        
        def destroy
           @galery
        end
     
        def index
           @galery = Galery.all
        end
     
        private
        
        def params_create
         params.require(:galery).permit(:subtitulo, :image)
        end
  
        def params_update
         params.require(:galery).permit(:subtitulo, :image)
        end
  
        def search
           @galery = Galery.findy_by( id: params[:id] )
        end
     
end
