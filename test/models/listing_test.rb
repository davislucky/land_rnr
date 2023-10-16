# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :text
#  num_guests  :integer
#  num_beds    :integer
#  type        :string
#  price       :integer          not null
#  lat         :float
#  long        :float
#  parking     :boolean          default(TRUE)
#  location    :string
#  heating     :boolean          default(TRUE)
#  ac          :boolean          default(TRUE)
#  host_id     :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require "test_helper"

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
