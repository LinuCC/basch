class Bs::Backend::Elawa::ElawaController < Bs::BackendController

  def index
    authorize :backend
  end

end
