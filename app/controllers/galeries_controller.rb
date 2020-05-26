class GaleriesController < ApplicationController
        #before_action :authenticate_user!
        before_action :params_create, only:[:create]
        before_action :params_update, only:[:update]
        before_action :search, only:[:destroy,:update]
        def new
            @galery = Galery.new
        end
  
        def create
           @galery = Galery.new(params_create)
           if @galery.save
            @galery.images.attach(params[:images])
            #Llame @messages.images.attach para agregar nuevas imágenes a un mensaje existente:
            flash[:notice] = "Su perfil fue creada exitosamente"
            #redirect_to 'path'
           else
            flash[:notice] = "Lamentamos informar que ha ocurrido un error"
            #redirect_to 'path'
           end
        end
        
        def show
           @galery
        end
  
        def update
            if @galery.update(params_update)
               flash[:notice] = "Su perfil fue creada exitosamente"
               #redirect_to 'path'
            else
               flash[:notice] = "Lamentamos informar que ha ocurrido un error"
               #redirect_to 'path'
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
         params.require(:galery).permit(:subtitulo,images:[])
        end
  
        def params_update
         params.require(:galery).permit(:subtitulo,images:[])
        end
  
        def search
           @galery = Galery.findy_by( id: params[:id] )
        end
     
end
