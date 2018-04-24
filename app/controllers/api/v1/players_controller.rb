class Api::V1::PlayersController < ApplicationController

  def index
    @players = Player.order(votes: :desc, name: :desc)
    render json: { players: @players }
  end

end
