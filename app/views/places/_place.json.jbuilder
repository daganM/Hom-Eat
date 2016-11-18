json.extract! place, :id, :title, :address, :zipcode, :city, :latitude, :longitude, :created_at, :updated_at
json.url place_url(place, format: :json)