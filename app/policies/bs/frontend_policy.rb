class Bs::FrontendPolicy < ApplicationPolicy

  def index?
    user.has_role? :user
  end

  def show?
    scope.where(:id => record.id).exists?
  end

  def create?
    user.has_role? :user
  end

  def new?
    create?
  end

  def update?
    user.has_role? :user
  end

  def edit?
    update?
  end

  def destroy?
    user.has_role? :user
  end

end
