class CreateBsLocations < ActiveRecord::Migration
  def change
    create_table :bs_locations do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
