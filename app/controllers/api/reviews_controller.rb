class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages}, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])

        if @review
            @review.update(review_params)
            render :show
        else 
            render json: { errors: @review.errors.full_messages}, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])

        if @review
            @review.delete
            render :show
        else
            render json: { errors: @review.errors.full_messages}, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:author_id, :listing_id, :blurb, :cleanliness, :accuracy, :communication, :location, :value, :check_in)
    end
end
