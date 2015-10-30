class CreateGrades < ActiveRecord::Migration
  def change
    create_table :grades do |t|
      t.string :level
      t.string :label

      t.timestamps null: false
    end
  end
end
