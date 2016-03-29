module Bs
  class Grade < ActiveRecord::Base

    include Bs::FilterAndSortableModel

    def display_name
      "#{level}-#{name}"
    end
  end
end
