class Bs::Frontend::DashboardController < Bs::FrontendController
  def index
    authorize :dashboard
    @page_data = serialize_objects(Bs::Grade.all)
  end
end
