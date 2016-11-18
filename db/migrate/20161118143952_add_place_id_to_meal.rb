class AddPlaceIdToMeal < ActiveRecord::Migration
  def change
    add_column :meals, :place_id, :integer
  end
end
