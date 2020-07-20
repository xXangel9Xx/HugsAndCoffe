Rails.application.routes.draw do
 root to: 'hugs_and_coffes#new'
devise_for :users
#devise_for :users, path: 'users', path_names: { sign_in: 'sign_in', sign_out: 'sign_out', password: 'password', confirmation: 'confirmation', unlock: 'unblock', sign_up: 'sign_up'  }


#get '/', to: 

   resources :perfils do 
      resources :galeries, except: [:create]
         resources :bank_accounts, except: [:create]
            
   end
   resources :thanks
 resources :galeries, only: [:create]
 resources :bank_accounts, only: [:create]
end
#devise_for :users do
 #  get '/users/sign_out' => 'devise/sessions#destroy'
# end
# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
#  resources :hugs_and_coffes, only: [:new],  as: :hugsAndCoffes
# get ':users_id/perfils', to: 'perfils#show'
#resources :thanks, only: [:create]
#resources :estado, :operation
# devise_for :users
#devise_for :users, controllers: {registrations:'users/registrations'}registration: 'registration'
#get '/perfils', to: 'perfils#new'
#namespace :users do
#  root :to => 'perfils#new'
#end,
# except: [:index] do
#resources :estados 
#end