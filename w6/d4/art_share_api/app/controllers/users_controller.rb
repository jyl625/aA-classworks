class UsersController < ApplicationController

  def index
    # render plain: "I'm in the index action!" #this results in DoubleRenderError
    render json: User.all
  end

  def create
    user = User.new(user_params)
    if user.save #adding ! here will stop executing the code here, resulting in erorr msg in preview
      render json: user
    else
      # render json: user.errors.full_messages, status: :unprocessable_entity
      render json: user.errors.full_messages, status: 422
    end
  end

  def show
    # debugger
    user = User.find(params[:id])
    render json: user
    # user = User.find_by(id: params[:id]) #find_by will return nil if nothing found
    # if user
    # else
    #   # render plain: "Cannot be found"
    #   render json: user.errors.full_messages
    # end
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    render json: user
  end

  def update
    if user = User.find_by(id: params[:id])
      user.update(user_params)
      # debugger
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end

end
