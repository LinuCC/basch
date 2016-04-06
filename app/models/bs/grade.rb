module Bs
  class Grade < ActiveRecord::Base

    include Bs::FilterAndSortableModel

    has_many :performances, class_name: 'Bs::GradePerformance'
    has_many :performers, through: :performances, source: :user
    has_many :attendances, class_name: 'Bs::GradeAttendance'
    has_many :attendees, through: :attendances, source: :user

    accepts_nested_attributes_for :attendances,
      allow_destroy: true,
      reject_if: :all_blank

    def display_name
      "#{level}-#{name}"
    end
  end
end
