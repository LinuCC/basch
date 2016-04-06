class BackendPolicy < ApplicationPolicy

  def index?
    user.has_role? :super_admin
  end

  def show?
    # scope.where(:id => record.id).exists?
    user.has_role? :super_admin
  end

  def create?
    user.has_role? :super_admin
  end

  def new?
    create?
  end

  def update?
    user.has_role? :super_admin
  end

  def edit?
    update?
  end

  def destroy?
    user.has_role? :super_admin
  end

end
