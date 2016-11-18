# == Schema Information
#
# Table name: meals
#
#  id          :integer          not null, primary key
#  title       :string
#  description :text
#  price       :integer
#  user_id     :integer
#  date        :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  place_id    :integer
#

class Meal < ActiveRecord::Base
  belongs_to :user
  belongs_to :place
end
