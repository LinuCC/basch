class Bs::Kuwasys::Class < ActiveRecord::Base
  enum event_status: [:open, :closed, :archived]
end
