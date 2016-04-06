class Bs::GradePerformanceSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :grade_id, :semester_id
  belongs_to :user
  belongs_to :semester, include: :semester
  belongs_to :grade
end
