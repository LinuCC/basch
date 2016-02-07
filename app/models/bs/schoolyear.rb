class Bs::Schoolyear < ActiveRecord::Base

  enum status: [:active, :archived]

  include Bs::FilterAndSortableModel

  def display_name
    name
  end

end
