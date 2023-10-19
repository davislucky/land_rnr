@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :title, :price, :location
        json.photoUrl listing.photo.attached? ? listing.photo.url : nil
        reviews = listing.reviews.includes(:listing)
        reviews.each do |review|
            json.extract! review, :author_id, :listing_id, :blurb, :cleanliness, :accuracy, :communication, :location, :value, :check_in
        end
    end
end

