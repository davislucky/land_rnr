@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :title, :price, :location, :type
        json.photoUrl listing.photo.attached? ? listing.photo.url : nil
        json.averageReview listing.get_average
    end
end
