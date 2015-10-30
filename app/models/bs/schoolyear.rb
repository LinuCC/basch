class Bs::Schoolyear < ActiveRecord::Base
  enum status: [:active, :archived]
end
