class SplitUserName < ActiveRecord::Migration
  def change
    rename_column :bs_users, :name, :family_name
    add_column :bs_users, :given_name, :string
  end
end
