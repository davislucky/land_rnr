json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :created_at, :updated_at
end

json.reservations do 
    @user.reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation, :num_guests, :listing_id, :guest_id, :check_in, :check_out, :id
        end
    end
end