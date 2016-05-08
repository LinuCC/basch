class CreateBsElawaSegmentPerformances < ActiveRecord::Migration
  def change
    create_table :bs_elawa_segment_performances do |t|
      t.integer :performer_id
      t.integer :location_id
      t.integer :segment_id

      t.timestamps null: false
    end
  end
end
