class Bs::Backend::DashboardController < Bs::BackendController
  def index
    authorize :backend
  end
end
