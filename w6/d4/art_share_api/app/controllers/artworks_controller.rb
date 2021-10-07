class ArtworksController < ApplicationController

  def index
    # if params[:user_id]
      arts_created = Artwork.where(artist_id: params[:user_id])
      arts_created ||= []
    # else
      arts_shared = Artwork.select("artworks.*").joins(:artwork_shares).where(artwork_shares:{viewer_id: params[:user_id]})
      arts_shared ||= []
    # end
    render json: (arts_created + arts_shared)
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
