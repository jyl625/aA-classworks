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
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    # debugger
    user = User.find_by(id: params[:id]) #find_by will return nil if nothing found
    
    if user
      render json: user
    else
      render plain: "Cannot be found"
    end
  end

  def destroy
    user = User.find_by(id: params[:id]).delete
    render plain: "#{user.name} was removed"
  end

  def update
    if user = User.find_by(id: params[:id])
      user.update(user_params)
      # debugger
      render json: user
    else
      render plain: "Record Not Found plain msg"
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end

end
