class Api::V1::PlayersController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    @players = Player.order(votes: :desc, name: :desc)
    render :json => @players, :include => {:games => {:exclude => :gamesStarted}}
  end

  def update
    @player = Player.find(params[:id])
    if @player.update(player_params)
      @players = Player.order(votes: :desc, name: :desc)
      render json: { players: @players }
    end
  end

  private

  def player_params
    params.require(:player).permit(:votes)
  end

end
