class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :title
      t.string :address
      t.string :zipcode
      t.string :city
      t.float :latitude
      t.float :longitude

      t.timestamps null: false
    end
  end
end
