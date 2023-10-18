class Api::ReservationsController < ApplicationController

    def show
        @reservation = Reservation.find_by(id: params[:id])

        if @reservation
            render :show
        else 
            render json: { errors: @reservation.errors.full_messages }, status: 422
        end
    end

    def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save
            render :show
        else
            render json: { errors: @reservation.errors.full_messages }, status: 422
        end
    end

    def update
        @reservation = Reservation.find_by(id: params[:id])
        
        if @reservation.update(reservation_params)
            render :show
        else 
            render json: { errors: @reservation.errors.full_messages }, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])

        if @reservation
            @reservation.delete
            render :show
        else
            render json: { errors: @reservation.errors.full_messages }, status: 422
        end
    end

    private

    def reservation_params
        params.require(:reservation).permit(:id, :guest_id, :listing_id, :num_guests, :check_in, :check_out)
    end
end
