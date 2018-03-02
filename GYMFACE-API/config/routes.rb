Rails.application.routes.draw do
  resources :klasses, only: :index
  resources :user_klasses, only: [:create, :destroy]

  post '/login', to: 'users#login'
  post '/logout', to: 'users#logout'

end
