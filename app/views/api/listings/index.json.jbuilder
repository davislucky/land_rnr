@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :title, :price, :location
        json.photoUrl listing.photo.attached? ? listing.photo.url : nil
    end
end