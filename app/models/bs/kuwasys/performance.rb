class Bs::Kuwasys::Performance < ActiveRecord::Base
  belongs_to :performer, class_name: 'User', foreign_key: 'user_id'
  belongs_to :course
end
