Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # rails routes -c api
  # post 'api/test', to: 'application#test'
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :listings, only: [:index, :show]
    resources :reservations, only: [:create, :destroy, :show, :update]
    resources :reviews, only: [:create, :destroy, :show, :update]
  end

  get '*path', to: "static_pages#frontend_index"
end
