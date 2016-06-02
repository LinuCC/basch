class Bs::Elawa::Session < ActiveRecord::Base
  belongs_to :performance, class_name: 'SegmentPerformance'
  belongs_to :attendee, class_name: 'Bs::User'

  enum :status, [:active, :disabled]
end
