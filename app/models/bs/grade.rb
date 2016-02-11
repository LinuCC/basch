module Bs
  class Grade < ActiveRecord::Base
    def display_name
      "#{level}-#{name}"
    end
  end
end
