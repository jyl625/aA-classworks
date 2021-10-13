class AlbumsController < ApplicationController
  def new
    render :new
  end
  
  def create
    @album = Album.new(album_params)
    if @album.save
      redirect_to band_url(@album.band_id)
    else
      render :new
    end
  end

  def show
    @album = Album.find_by(id: params[:id])
    render :show
  end
  
  def edit
  end

  def update
  end

  def destroy
  end

  private
  def album_params
    params.require(:album).permit(:title, :year, :band_id, :live)
  end

end
