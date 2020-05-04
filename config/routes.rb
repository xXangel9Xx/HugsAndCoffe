Rails.application.routes.draw do
   devise_for :users 
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #  resources :hugs_and_coffes, only: [:new],  as: :hugsAndCoffes
get ':users_id/perfils', to: 'perfils#show'
get 'hugsAndCoffe', to: 'hugs_and_coffes#new'
get '/', to: 'perfils#new'


resources :estado, :operation

resources :perfils, except: [:index,:new,:show] do
 resources :estado 
end

resources :thanks, only: [:create]
end
