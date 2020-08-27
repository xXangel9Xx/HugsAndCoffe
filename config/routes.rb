Rails.application.routes.draw do
 root to: 'hugs_and_coffes#new'
 devise_for :users
   resources :perfils, except:[:create,:update] do 
     resources :galeries, except: [:create,:update]
        resources :bank_accounts, except: [:create,:update]
           resources :thanks, except: [:create]
   end

 resources :thanks, only: [:create,:update]
 resources :galeries, only: [:create,:update]
 resources :bank_accounts, only: [:create,:update]
 resources :perfils, only:[:create,:update]
end
