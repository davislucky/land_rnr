class Api::UsersController < ApplicationController
  # before_action :require_logged_out, only: [:create]
  wrap_parameters include: User.attribute_names + ['password'] 

  def create
    
    @user = User.new(user_params.deep_transform_keys! { |key| key.underscore })

    if @user.save
      login!(@user)
      render :show
    else 
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end

