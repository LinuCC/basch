class Bs::Kuwasys::Cycle < ActiveRecord::Base
  enum :status, [:active, :archived]
end
