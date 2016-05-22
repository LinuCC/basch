class Bs::UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :given_name, :family_name, :display_name, :email
  has_many :grade_performances, include: :semester
end
