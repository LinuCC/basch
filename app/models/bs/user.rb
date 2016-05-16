class Bs::User < ActiveRecord::Base

  #============================== Devise ===========================

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise(
    :database_authenticatable, :registerable, :recoverable, :rememberable,
    :trackable, :validatable, :lockable, :timeoutable
  )
  attr_accessor :login

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions.to_hash)
        .where([
          "lower(username) = :value OR lower(email) = :value",
          { :value => login.downcase }
        ]).first
    else
      conditions[:email].downcase! if conditions[:email]
      where(conditions.to_hash).first
    end
  end

  validates :username, presence: true, uniqueness: {case_sensitive: false}
  validates_format_of :username, with: /\A[a-zA-Z0-9_\.]*\z/

  #============================== Roles ==============================

  rolify

  after_create :assign_default_role

  def assign_default_role
    add_role(:user)
  end

  #============================== Scopes ==============================

  include Bs::FilterAndSortableModel

  scope :with_username, lambda { |username|
    where('bs_users.username LIKE ?', "%#{username}%")
  }

  #============================== Relations ==============================

  has_many :kuwasys_performances
  has_many :grade_performances

  has_many :kuwasys_attendances
  has_many :grade_attendances

  has_many :elawa_performances, class_name: 'Elawa::SegmentPerformance'

  #============================== Other ==============================

  def display_name
    name || username
  end

  def admin?
    has_role?(:admin) || has_role?(:super_admin)
  end

end
