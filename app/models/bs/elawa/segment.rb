class Bs::Elawa::Segment < ActiveRecord::Base
  validates :name, presence: true
  belongs_to :event
end
