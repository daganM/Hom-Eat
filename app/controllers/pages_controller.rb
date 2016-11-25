class PagesController < ApplicationController


  def index
    @meals = Meal.all.order('created_at DESC').limit(3)
  end

  def search
    places = Place.where(city: "Bordeaux")
    place_ids = []
    places.each do |p|
      place_ids << p.id
    end
    @meals = Meal.where(place_id: place_ids)
  end

  def about
  end

  def contact
  end
end
