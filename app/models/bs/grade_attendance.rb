class Bs::GradeAttendance < ActiveRecord::Base
  belongs_to :user
  belongs_to :grade
  belongs_to :semester
end
