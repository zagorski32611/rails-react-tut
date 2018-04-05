Rails.application.routes.draw do
  get 'pages/home'
  namespace :api, defaults: { format: :json } do
    resources :quotes, only: [ :show ]
  end
end
