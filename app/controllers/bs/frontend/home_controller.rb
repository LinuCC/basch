class Bs::Frontend::HomeController < Bs::FrontendController
  def index
    authorize :home
  end
end
