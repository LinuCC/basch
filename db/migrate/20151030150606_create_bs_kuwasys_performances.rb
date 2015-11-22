class CreateBsKuwasysPerformances < ActiveRecord::Migration
  def change
    create_table :bs_kuwasys_performances do |t|
      t.integer :user_id, null: false
      t.integer :course_id, null: false
      t.integer :status, default: 0

      t.timestamps null: false
    end
  end
end
