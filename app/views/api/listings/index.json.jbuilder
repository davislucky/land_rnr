@listings.each do |listing|
    json.set! home.id do
        json.extract! home, :id, :title, :price
    end
end