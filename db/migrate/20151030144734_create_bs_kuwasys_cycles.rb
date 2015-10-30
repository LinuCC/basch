class CreateBsKuwasysCycles < ActiveRecord::Migration
  def change
    create_table :bs_kuwasys_cycles do |t|
      t.string :name, null: false
      t.integer :status, default: 0, null: false
      t.date :start_date
      t.date :end_date
      t.date :register_start_date
      t.date :register_end_date

      t.timestamps null: false
    end
  end
end
