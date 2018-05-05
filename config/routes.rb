Rails.application.routes.draw do
  resources :games
  root 'players#index'
  resources :players

  namespace :api do
    namespace :v1 do
      resources :players
        resources :games
    end
  end
end
