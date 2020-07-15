class ApplicationController < ActionController::Base


    private 



    def after_sign_out_path_for(resource)
        root_path('/') 
        # return the path based on resource
    end
    
    
    def after_sign_in_path_for(resource)
      perfil_path('new')  || root_path('/') 
     # perfil_path('new') if is_navigational_format?
    end
end
