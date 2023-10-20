json.extract! @review, :author_id, :listing_id, :blurb, :cleanliness, :accuracy, :communication, :location, :value, :check_in, :id

author = @review.author

json.first_name author.first_name
json.last_name author.last_name