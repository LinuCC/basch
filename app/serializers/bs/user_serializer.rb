class Bs::UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :display_name, :email
  has_many :grade_performances, include: :semester
end
