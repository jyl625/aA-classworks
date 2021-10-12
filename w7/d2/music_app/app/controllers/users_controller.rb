class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.create(user_params)
    if @user
      log_in_user!(@user)
      redirect_to user_url(@user)
    else
      render :new
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private 

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
