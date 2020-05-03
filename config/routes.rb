Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
get 'hugsAndCoffes', to: 'hugs_and_coffes#new'
#  resources :hugs_and_coffes, only: [:new],  as: :hugsAndCoffes
resources :estado, :operation
resources :perfils, except: [:index]
resources :thanks, only: [:create]
end
