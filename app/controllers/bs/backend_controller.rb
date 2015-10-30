class Bs::BackendController < ApplicationController
  layout :backend_layout

  def backend_layout
    'bs/backend/application'
  end
end
