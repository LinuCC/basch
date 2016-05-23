class Bs::Elawa::SegmentPerformance < ActiveRecord::Base
  belongs_to :segment
  belongs_to :performer, class_name: 'Bs::User'
  belongs_to :location
end
