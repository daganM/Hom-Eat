class PagesController < ApplicationController


  def index
    @meals = Meal.all.order('created_at DESC').limit(3)
  end

  def about
  end

  def contact
  end
end
