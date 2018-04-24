Rails.application.routes.draw do
  root 'players#index'
  resources :players

  namespace :api do
    namespace :v1 do
      resources :players
    end
  end
end
