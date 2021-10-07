class ArtworkSharesController < ApplicationController

  def create
    artworkshare = ArtworkShare.create(artworkshare_params)
    render json: artworkshare
  end

  def destroy
    artworkshare = ArtworkShare.find(params[:id])
    artworkshare.destroy
    render json: artworkshare
  end

  private

  def artworkshare_params
    params.require(:artworkshare).permit(:viewer_id, :artwork_id)
  end



end
