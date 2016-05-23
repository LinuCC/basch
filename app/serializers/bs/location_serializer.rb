class Bs::LocationSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :elawa_segment_performances
end
