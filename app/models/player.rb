class Player < ApplicationRecord
  has_many :games

  validates :name, presence: true
  validates :position, presence: true
  validates :team, presence: true
end
