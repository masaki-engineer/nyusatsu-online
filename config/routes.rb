Rails.application.routes.draw do

  root to: 'site#index'

  get 'municipality/sign_up', to: 'site#index'
  get 'municipality/sign_in', to: 'site#index'
  get 'company/sign_up', to: 'site#index'
  get 'company/sign_in', to: 'site#index'

  get 'municipality/my_page', to: 'site#index'
  get 'company/my_page', to: 'site#index'

  get 'projects/new', to: 'site#index'
  get 'projects/search', to: 'site#index'
  get 'municipality/:id', to: 'site#index'

  namespace :api do
    namespace :v1 do

      mount_devise_token_auth_for 'Municipality', at: 'municipality', controllers: {
        registrations: 'api/v1/municipality/registrations'
      }
      namespace :municipality do
        resources :sessions, only: [:index]
      end
      resources :municipalities, only: [:show]

      mount_devise_token_auth_for 'Company', at: 'company', controllers: {
        registrations: 'api/v1/company/registrations'
      }
      namespace :company do
        resources :sessions, only: [:index]
      end

      get '/projects/recent', to: 'projects#recent'
      get '/projects/search', to: 'projects#search'
      get '/projects/search_by_municipality', to: 'projects#search_by_municipality'
      resources :projects, only: [:create]
      
    end
  end

end
