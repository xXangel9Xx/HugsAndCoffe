Rails.application.routes.draw do
 root to: 'hugs_and_coffes#new'
devise_for :users


   resources :perfils do 
      resources :galeries, except: [:create]
         resources :bank_accounts, except: [:create]
            resources :thanks, except: [:create]

   end
 resources :thanks, only: [:create]
 resources :galeries, only: [:create]
 resources :bank_accounts, only: [:create]
end
