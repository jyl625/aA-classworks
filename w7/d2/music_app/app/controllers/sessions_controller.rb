class SessionsController < ApplicationController
  def new
      render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      log_in_user!(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = ["Invalid Username or Password"]
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end
