class CreateBsGradePerformances < ActiveRecord::Migration
  def change
    create_table :bs_grade_performances do |t|

      t.integer :user_id, null: false
      t.integer :grade_id, null: false
      t.integer :semester_id, null: false

      t.index(
        [:user_id, :grade_id, :semester_id],
        unique: true,
        name: 'index_bs_grade_performances_user_grade_semester_unique'
      )
      t.timestamps null: false
    end


  end
end
