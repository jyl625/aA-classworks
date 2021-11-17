class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      render :show
    else
      render json: ['Invalid username or password.'], status: 422
    end
  end

  def destroy
    if !current_user
      render json: ['User not found'], status: 404
    else
      logout!
      render {}
    end
  end 
end
