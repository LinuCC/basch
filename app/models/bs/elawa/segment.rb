class Bs::Elawa::Segment < ActiveRecord::Base
  belongs_to :event
  has_many :performances, class_name: 'SegmentPerformance'
  has_many :performers, through: :performances
  validates :event, presence: true
  validates :name, presence: true
end
