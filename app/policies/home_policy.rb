class HomePolicy < FrontendPolicy

  def index?
    # If a user does not have a role, but is logged in, he could be in a
    # redirection-loop if HomeController is root_path. Allow him to see the
    # home#index even without role :)
    user.present?
  end

  class Scope < Scope
    def resolve
      scope
    end
  end
end
