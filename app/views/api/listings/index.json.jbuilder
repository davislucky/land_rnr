@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :title, :price, :location
        json.photUrl post.photo.attached ? post.photo.url : nil
    end
end