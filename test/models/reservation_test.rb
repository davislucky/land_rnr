# == Schema Information
#
# Table name: reservations
#
#  id         :bigint           not null, primary key
#  guest_id   :bigint           not null
#  num_guests :integer          not null
#  check_in   :date             not null
#  check_out  :date             not null
#  listing_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
