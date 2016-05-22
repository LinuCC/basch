class Bs::Elawa::SegmentPerformancePolicy < ApplicationPolicy
  def initialize(user, performance)
    @user = user
    @record = performance
  end

  def create?
    user.admin?
  end

end
