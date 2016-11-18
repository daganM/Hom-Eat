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

require 'test_helper'

class PlaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
