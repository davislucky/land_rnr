# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  author_id     :bigint           not null
#  listing_id    :bigint           not null
#  location      :integer          not null
#  cleanliness   :integer          not null
#  accuracy      :integer          not null
#  value         :integer          not null
#  check_in      :integer          not null
#  communication :integer          not null
#  blurb         :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
end
