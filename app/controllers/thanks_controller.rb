class ThanksController < ApplicationController
   before_action :params_create, only:[:create]
    def create 
       @thak = Thank.new(params_create)
       if @thank.save
        render json: @thank
       else
        render json: @thank.errors.full_messages, status:400
       end
    end
    private

    def params_create
      params.require(:thanks).permit(:coffee,:hug)
    end
end
