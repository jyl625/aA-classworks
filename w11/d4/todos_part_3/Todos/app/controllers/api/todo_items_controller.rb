class Api::TodoItemsController < ApplicationController
  def show
    render json: TodoItem.find(params[:id])
  end

  def create
    todo_item = TodoItem.new(todo_item_params)
    if todo_item.save
      render json: todo_item
    else
      render json: todo_item.errors.full_messages, status: 422
    end
  end

  def index
    todo_items = TodoItem.all
    render json: todo_items
  end

  def update
    todo_item = TodoItem.find_by(id: params[:id])
    if todo_item.update(todo_item_params)
      render json:todo_item
    else
      render json: todo_item.errors.full_messages, status: 422
    end
  end

  def destroy
    todo_item = TodoItem.find_by(id: params[:id])
    if todo_item
      todo_item.destroy
    else
      render json: 'Error: Todo item was not found, so could not be deleted', status: 422
    end

  end

  private
  def todo_item_params()
    params.require(:todo_item).permit(:title, :body, :done)
  end
end
