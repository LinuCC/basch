class Bs::Elawa::SegmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :event_id, :start_date, :end_date
  has_many :performances
  belongs_to :event
end
