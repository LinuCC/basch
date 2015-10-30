class Bs::Frontend::HomeController < Bs::FrontendController
  def index
    authorize self
  end
end
