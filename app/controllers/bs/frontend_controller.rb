class Bs::FrontendController < ApplicationController
  layout :frontend_layout

  def frontend_layout
    'bs/frontend/application'
  end
end
