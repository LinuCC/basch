class Bs::Location < ActiveRecord::Base
  has_many(
    :elawa_segment_performances, class_name: 'Bs::Elawa::SegmentPerformance'
  )
end
