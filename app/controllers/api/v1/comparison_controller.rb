class Api::V1::ComparisonController < ApplicationController
  protect_from_forgery with: :null_session
  def show
    @player = Player.find(params[:id])
    render :json => @player
  end

  def update
    @player = Player.find(params[:id])
    if @player.update(player_params)
      @players = Player.order(votes: :desc, name: :desc)
      render :json => @players, :include => {:games => {:exclude => :gamesStarted}}
    end
  end

  private

  def player_params
    params.require(:player).permit(:votes)
  end

end
