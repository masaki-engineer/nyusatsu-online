Rails.application.routes.draw do

  root to: 'site#index'

  get 'municipality/sign_up', to: 'site#index'
  get 'municipality/sign_in', to: 'site#index'
  get 'company/sign_up', to: 'site#index'

  namespace :api do
    namespace :v1 do

      mount_devise_token_auth_for 'Municipality', at: 'municipality', controllers: {
        registrations: 'api/v1/municipality/registrations'
      }
      namespace :municipality do
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
