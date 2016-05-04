class Bs::Elawa::SegmentPolicy < ApplicationPolicy
  def initialize(user, event)
    @user = user
    @record = event
  end

  def create?
    user.admin?
  end

  def update?
    user.admin?
  end

  def destroy?
    user.admin?
  end
end
