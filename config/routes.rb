Rails.application.routes.draw do
  # devise_for :users
  # devise_for :users, controllers: {registrations:'users/registrations'}registration: 'registration'
devise_for :users, skip: :all
devise_for :users, path: 'users', path_names: { sign_in: 'sign_in', sign_out: 'sign_out', password: 'password', confirmation: 'verification', unlock: 'unblock', sign_up: 'sign_up'  }
namespace :users do
  root :to => 'perfils#new'
end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #  resources :hugs_and_coffes, only: [:new],  as: :hugsAndCoffes

#  get ':users_id/perfils', to: 'perfils#show'
#get 'hugsAndCoffe', to: 'hugs_and_coffes#new'
get '/perfils', to: 'perfils#new'


#resources :estado, :operation

#resources :perfils, except: [:index,:new,:show] do
#resources :estado 
#end

#resources :thanks, only: [:create]
end
