class Bs::Backend::ElawaController < Bs::BackendController

  def index
    authorize :backend
    client_rendered
  end

end
