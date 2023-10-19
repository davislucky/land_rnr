json.extract! @listing, :id, :title, :price, :location, :description, :num_beds, :num_guests

reviews = @listing.reviews.includes(:listing)

json.reviews do
    reviews.each do |review|
        json.set! review.id do
            json.extract! review, :author_id, :listing_id, :blurb, :cleanliness, :accuracy, :communication, :location, :value, :check_in
        end
    end
end