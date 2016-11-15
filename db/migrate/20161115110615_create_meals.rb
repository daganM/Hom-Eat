class CreateMeals < ActiveRecord::Migration
  def change
    create_table :meals do |t|
      t.string :title
      t.text :description
      t.integer :price
      t.integer :user_id
      t.datetime :date

      t.timestamps null: false
    end
  end
end
