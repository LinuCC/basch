class Bs::Semester < ActiveRecord::Base

  enum status: [:archived, :active]

  include Bs::FilterAndSortableModel

  def display_name
    name
  end

end
