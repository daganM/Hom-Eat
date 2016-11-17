class PagesController < ApplicationController


  def index
    @meals = Meal.all.order('created_at DESC')
  end

  def about
  end

  def contact
  end
end
