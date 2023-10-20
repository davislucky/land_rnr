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
class Listing < ApplicationRecord
    LISTING_TYPE = ["cabin", "mansion", "apartment", "house", "private room"]

    # validates :type, inclusion: { in: LISTING_TYPE}
    validates :num_guests, :num_beds, :price, numericality: { greater_than: 0 }
    validates :heating, :ac, :parking, inclusion: { in: [true, false] }
    # validates :host_id, uniqueness: true

    belongs_to :host,
        class_name: :User,
        foreign_key: :host_id

    has_one_attached :photo

    has_many :reviews

    def get_average
        reviews = self.reviews

        reviews.map{ |review| review.calculate_average}.sum / (reviews.length * 1.0)
    end

    # def self.rating 
    #     score = 
    #     arr = [];
    #     reviews = @listing.reviews

    #     reviews.each do |review|
    #         arr.push(review)
    #     end

    #     arr.each do |review|
    #         review.
    #     end
    # end
end
