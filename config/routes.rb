Rails.application.routes.draw do

  root to: 'site#index'

  namespace :api do
    namespace :v1 do

      mount_devise_token_auth_for 'Municipality', at: 'municipality', controllers: {
        registrations: 'api/v1/municipality/registrations'
      }
      namespace :municipalit do
        resources :sessions, only: [:index]
      end

      mount_devise_token_auth_for 'Company', at: 'company', controllers: {
        registrations: 'api/v1/company/registrations'
      }
      namespace :company do
        resources :sessions, only: [:index]
      end
      
    end
  end

end
