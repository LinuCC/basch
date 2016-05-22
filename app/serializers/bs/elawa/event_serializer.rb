class Bs::Elawa::EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :status
  has_many :segments
end
