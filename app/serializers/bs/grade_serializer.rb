class Bs::GradeSerializer < ActiveModel::Serializer
  attributes :id, :name, :level

  has_many :performances
  has_many :attendances
end
