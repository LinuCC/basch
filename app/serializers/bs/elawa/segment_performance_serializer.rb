class Bs::Elawa::SegmentPerformanceSerializer < ActiveModel::Serializer
  attributes :id, :performer_id, :segment_id, :location_id
  belongs_to :segment
  belongs_to :performer
  belongs_to :location
end
