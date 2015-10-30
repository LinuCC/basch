class Bs::Backend::DashboardController < ApplicationController
  def index
    authorize :backend
  end
end
