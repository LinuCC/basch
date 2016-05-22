class Bs::Elawa::SegmentPerformanceSerializer < ActiveModel::Serializer
  attributes :id, :performer_id, :segment_id
  belongs_to :segment
  belongs_to :performer
end
