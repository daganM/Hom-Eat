class PagesController < ApplicationController


  def index
    @meals = Meal.all.order('created_at DESC').limit(3)
  end

  def search
    @lat1 = params[:lat].to_f
    @lng1 = params[:lng].to_f
    places = Place.all
    place_ids = []
    places.each do |p|
      if CoorDistance(p.latitude, p.longitude)
        place_ids << p.id
      end
    end
    @meals = Meal.where(place_id: place_ids)
  end

  def about
  end

  def contact
  end

  private
    def CoorDistance(lat2 = 0, lng2 = 0, maxDist = 500)  # maxDist is a bit more than 5kms
      r = 6371 # in kilometers
      lat2 = lat2.to_f
      lng2 = lng2.to_f
      x = (lat2 - @lat1) * Math.cos((@lng1 + lng2) / 2)
      y = (lng2 - @lng1)
      d = Math.sqrt(x*x + y*y)*r
            if d <= maxDist
              logger.info(d)
              return true
            else
              logger.info(d)
              return false
            end
    end
end
