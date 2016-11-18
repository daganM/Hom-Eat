class AddLatAndLngAndStreetNumberToPlace < ActiveRecord::Migration
  def change
    add_column :places, :street_number, :float
  end
end
