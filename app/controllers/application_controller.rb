class ApplicationController < ActionController::Base
   # _layout 'application'
 #  alias :std_redirect_to :redirect_to
 #  def redirect_to(*args)
 #        flash.keep
 #        std_redirect_to *args
 #  end

    private 

    def after_sign_out_path_for(resource)
        root_path('/')  
    end
    
    def after_sign_in_path_for(resource)
       return perfil_path('new') if resource.perfil == nil
       return perfil_path(current_user.id,@perfil)
    end
end
# return the path based on resource
# if resource.perfil == nil
#    return perfil_path('new')
# end    
# perfil_path('new') if is_navigational_format?