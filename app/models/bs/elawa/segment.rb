class Bs::Elawa::Segment < ActiveRecord::Base
  belongs_to :event
  validates :event, presence: true
  validates :name, presence: true
end
