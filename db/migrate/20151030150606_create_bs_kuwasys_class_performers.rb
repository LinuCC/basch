class CreateBsKuwasysClassPerformers < ActiveRecord::Migration
  def change
    create_table :bs_kuwasys_class_performers do |t|
      t.integer :user_id, null: false
      t.integer :class_id, null: false
      t.integer :status, default: 0

      t.timestamps null: false
    end
  end
end
