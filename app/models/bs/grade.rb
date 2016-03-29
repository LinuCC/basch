module Bs
  class Grade < ActiveRecord::Base

    include Bs::FilterAndSortableModel

    has_many :performances, class_name: 'Bs::GradePerformance'
    has_many :performers, through: :performances, class_name: 'Bs::User'

    def display_name
      "#{level}-#{name}"
    end
  end
end
