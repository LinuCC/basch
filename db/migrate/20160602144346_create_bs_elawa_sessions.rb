class CreateBsElawaSessions < ActiveRecord::Migration
  def change
    create_table :bs_elawa_sessions do |t|
      t.integer :status
      t.integer :attendee_id
      t.integer :performance_id
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps null: false
    end
  end
end
