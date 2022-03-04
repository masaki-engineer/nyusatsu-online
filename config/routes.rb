Rails.application.routes.draw do
  mount_devise_token_auth_for 'Municipality', at: 'auth'
  root to: 'site#index'
end
