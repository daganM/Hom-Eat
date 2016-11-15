json.extract! meal, :id, :title, :description, :price, :user_id, :date, :created_at, :updated_at
json.url meal_url(meal, format: :json)