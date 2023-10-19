class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
    debugger
    render :index
  end

  def show
    @listing = Listing.find_by(id: params[:id])

    if @listing
      render :show
    else
      render json: { errors: ["Sorry. There were not listings matching those criteria"] }, status: :unprocessable_entity
    end
  end

end
