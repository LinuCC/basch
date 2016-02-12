class CreateBsSemesters < ActiveRecord::Migration
  def change
    create_table :bs_semesters do |t|
      t.string :name, null: false
      t.integer :status, default: 0, null: false
      t.date :start_date
      t.date :end_date

      t.timestamps null: false
    end
  end
end
