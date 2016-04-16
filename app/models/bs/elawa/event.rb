class Bs::Elawa::Event < ActiveRecord::Base
  enum status: [:active, :archived]

  validates :name, presence: true
  validates :status, presence: true
end
