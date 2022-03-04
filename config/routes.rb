Rails.application.routes.draw do

  root to: 'site#index'

  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'Municipality', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }
      namespace :auth do
        resources :sessions, only: [:index]
      end
    end
  end
  
end
