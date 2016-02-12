class RenameTableSchoolyearsToSemesters < ActiveRecord::Migration
  def change
    rename_table :bs_schoolyears, :bs_semesters
  end
end
