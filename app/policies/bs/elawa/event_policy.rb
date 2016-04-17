class Bs::Elawa::EventPolicy < ApplicationPolicy
  def initialize(user, event)
    @user = user
    @record = event
  end

  def index?
    user.has_role?(:admin) || user.has_role?(:super_admin)
  end
end
