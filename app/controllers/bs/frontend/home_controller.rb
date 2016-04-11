class Bs::Frontend::HomeController < Bs::FrontendController
  def index
    authorize :home
    @page_data = serialize_objects(Bs::Grade.all)
  end
end
