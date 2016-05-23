Rails.application.routes.draw do

  devise_for :users, class_name: 'Bs::User'

  scope module: 'bs' do

    scope module: 'frontend' do
      root to: 'dashboard#index'
      resources :settings, only: [:index, :update]
    end

    namespace :backend do
      root to: 'dashboard#index'
      resources :grades
      resources :users
      resources :semesters
      resources :locations

      namespace :kuwasys do
        root to: 'dashboard#index'
        resources :dashboard, only: :index
        resources :courses
      end

      resources :elawa, only: :index
      namespace :elawa do
        resources :events, only: [:show, :index]
        resources :segments, only: :show
      end
    end

    namespace :api do
      namespace :v1 do
        namespace :elawa do
          resources :events, only: [:index, :create, :destroy, :show, :update]
          resources :segments, only: [:create, :show, :update, :destroy] do
            resources(
              :performances, only: [:create], controller: 'segment_performances'
            )
          end
          resources(:segment_performances, only: [:destroy])
        end
      end
    end
  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
