class CreateBsKuwasysClasses < ActiveRecord::Migration
  def change
    create_table :bs_kuwasys_classes do |t|
      t.string :name, null: false
      t.text :description, default: ''
      t.date :start_date
      t.date :end_date
      t.integer :event_status, default: 0, null: false

      t.timestamps null: false
    end
  end
end
