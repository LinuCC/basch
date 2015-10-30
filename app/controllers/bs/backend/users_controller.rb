class Bs::Backend::UsersController < Bs::BackendController

  def index
    authorize :backend
  end

end
