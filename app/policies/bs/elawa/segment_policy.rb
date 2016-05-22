class Bs::Elawa::SegmentPolicy < ApplicationPolicy
  def initialize(user, segment)
    @user = user
    @record = segment
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

  def show?
    user.admin?
  end
end
