# == Schema Information
#
# Table name: places
#
#  id         :integer          not null, primary key
#  title      :string
#  address    :string
#  zipcode    :string
#  city       :string
#  latitude   :float
#  longitude  :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Place < ActiveRecord::Base
  belongs_to :user
  has_many :meals
 def to_s
   "#{title}, #{zipcode} #{city}."
 end
end
