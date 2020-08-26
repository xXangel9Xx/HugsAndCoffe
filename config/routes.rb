Rails.application.routes.draw do
 root to: 'hugs_and_coffes#new'

 
devise_for :users

get '/errors', to: 'errors#error'

   resources :perfils do 
     resources :galeries, except: [:create,:update]
        resources :bank_accounts, except: [:create,:update]
           resources :thanks, except: [:create]
   end
 #resources :perfils, only:[:edit,:update]
 resources :thanks, only: [:create,:update]
 resources :galeries, only: [:create,:update]
 resources :bank_accounts, only: [:create,:update]


end
