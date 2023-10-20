json.listing do
    json.extract! @listing, :id, :title, :price, :location, :description, :num_beds, :num_guests, :type, :ac, :heating, :parking
    json.average_review @listing.get_average
    json.host_fname @listing.host.first_name
    json.host_lname @listing.host.last_name
    json.photoUrl @listing.photo.attached? ? @listing.photo.url : nil
end


reviews = @listing.reviews.includes(:listing)
json.reviews do
    reviews.each do |review|
        json.set! review.id do
            json.extract! review, :author_id, :listing_id, :blurb, :cleanliness, :accuracy, :communication, :location, :value, :check_in, :id
        end
    end
end

