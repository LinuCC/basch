class Bs::Kuwasys::Course < ActiveRecord::Base
  enum event_status: [:open, :closed, :archived]

  has_many :performances
  has_many :performers, through: :performances
end
