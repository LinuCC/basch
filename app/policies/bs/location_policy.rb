class Bs::LocationPolicy < BackendPolicy

  def initialize(user, location)
    @user = user
    @location = location
  end

  def index?
    user.admin?
  end

end
