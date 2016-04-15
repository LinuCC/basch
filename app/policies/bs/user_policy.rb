class Bs::UserPolicy < ApplicationPolicy

  def initialize(current_user, user)
    @user = current_user
    @record = user
  end

  def index?
    if !user.has_role?(:admin)
      @record.present? && user == @record
    end
  end

  def update?
    if !user.has_role?(:admin) then user == @record
    else true
    end
  end

  class Scope < Scope
    def resolve
      scope
    end
  end
end
