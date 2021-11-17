class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      # redirect_to user_url(@user)
      render :show
    else
      render json: ['Invalid username or password.'], status: 422
    end
  end

  def show
    @user = User.find(params:[id])
    if @user
      render :show
    else
      render json: ['User not found.'], status: 404
    end
  end


  def user_params
    params.require(:user).permit(:username, :password)
  end
end
