class CreateGrades < ActiveRecord::Migration
  def change
    create_table :bs_grades do |t|
      t.string :level, default: '', null: false
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
