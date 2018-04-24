class Player < ApplicationRecord
  validates :name, presence: true
  validates :position, presence: true
  validates :team, presence: true
end
