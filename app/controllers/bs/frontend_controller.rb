class Bs::FrontendController < ApplicationController
  layout :frontend_layout

  before_action :set_generated_assets_dir

  def frontend_layout
    'bs/frontend/application'
  end

private

  def set_generated_assets_dir
    ReactOnRails.configuration.generated_assets_dir = Basch::Application.config.generated_frontend_assets_dir
  end
end
