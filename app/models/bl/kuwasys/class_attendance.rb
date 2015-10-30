class Bl::Kuwasys::ClassAttendance < ActiveRecord::Base
  enum status: [:active, :waiting, :primary_request, :secondary_request]
end
