@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :title, :price, :location
    end
end