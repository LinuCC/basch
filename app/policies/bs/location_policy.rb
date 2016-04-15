class Bs::LocationPolicy < BackendPolicy

  def initialize(user, location)
    @user = user
    @location = location
  end

end
