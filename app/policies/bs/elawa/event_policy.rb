class Bs::Elawa::EventPolicy < ApplicationPolicy
  def initialize(user, event)
    @user = user
    @record = event
  end
  
  def create?
    user.admin?
  end

  def index?
    user.admin?
  end
end
