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

  def show?
    user.admin?
  end

  def destroy?
    user.admin?
  end

  def update?
    user.admin?
  end
end
