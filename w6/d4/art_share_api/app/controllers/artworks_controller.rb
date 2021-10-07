class ArtworksController < ApplicationController

  def index
    arts = Artwork.where(artist_id: params[:user_id])
    render json: arts
    # render json: Artwork.all
  end

  def create
    art = Artwork.create(artwork_params)
    render json: art
  end

  def show
    art = Artwork.find(params[:id])
    if art
      render json: art
    else
      render json: art.errors.full_messages, status: 422
    end
  end

  def destroy
    art = Artwork.find(params[:id])
    art.destroy
    render json: art
  end

  def update
    art = Artwork.find(params[:id])
    if art
      art.update(artwork_params)
      render json: art
    else
      render json: art.errors.full_messages, status: 422
    end
  end

  private

  def artwork_params
    params.require(:artwork).permit(:title, :image_url, :artist_id)
  end

end
