class CreateBsElawaEvents < ActiveRecord::Migration
  def change
    create_table :bs_elawa_events do |t|
      t.string :name
      t.integer :segments
      t.integer :status, default: 0

      t.timestamps null: false
    end
  end
end
