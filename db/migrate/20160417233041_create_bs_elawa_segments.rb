class CreateBsElawaSegments < ActiveRecord::Migration
  def change
    create_table :bs_elawa_segments do |t|
      t.string :name
      t.datetime :start_date
      t.datetime :end_date
      t.integer :event_id

      t.timestamps null: false
    end
  end
end
