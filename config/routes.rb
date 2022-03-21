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
  get 'company/:id', to: 'site#index'
  get 'projects/:id', to: 'site#index'
  get 'projects/:project_id/bids/new', to: 'site#index'

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
      resources :companies, only: [:show]

      get '/projects/recent', to: 'projects#recent'
      get '/projects/search', to: 'projects#search'
      resources :projects, only: [:create, :show, :destroy] do
        resources :bids, only: [:create]
      end

    end
  end

end
