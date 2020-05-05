class ApplicationController < ActionController::Base
    private 

    def after_sign_in_path_for(resource)
       '/perfils'
        # profile_path(perfils_path) if is_navigational_format?
    end
end
