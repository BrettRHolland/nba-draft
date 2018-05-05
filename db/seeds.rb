require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

positions = ["Guard", "Forward", "Center"]

30.times do |player|
  Player.create(
    name: Faker::Name.name,
    position: positions.sample,
    team: Faker::Address.state,
    height: Faker::Number.between(74, 86),
    weight: Faker::Number.between(160, 260),
    year: Faker::Number.between(1, 4),
    birth: Faker::Date.birthday(18, 22),
    votes: Faker::Number.between(200, 1500)
  )
end

i = 0
30.times do |player|
  i += 1
  Game.create(
    player_id: i,
    season: 2016,
    games: Faker::Number.number(2),
    gamesStarted: Faker::Number.number(2),
    min: Faker::Number.decimal(1, 2),
    fgM: Faker::Number.decimal(1, 2),
    fgA: Faker::Number.decimal(1, 2),
    fgP: Faker::Number.decimal(0, 3),
    twoM: Faker::Number.decimal(1, 2),
    twoA: Faker::Number.decimal(1, 2),
    twoP: Faker::Number.decimal(0, 3),
    threeM: Faker::Number.decimal(1, 2),
    threeA: Faker::Number.decimal(1, 2),
    threeP: Faker::Number.decimal(0, 3),
    ftM: Faker::Number.decimal(1, 2),
    ftA: Faker::Number.decimal(1, 2),
    ftP: Faker::Number.decimal(0, 3),
    oReb: Faker::Number.decimal(1, 2),
    dReb: Faker::Number.decimal(1, 2),
    tReb: Faker::Number.decimal(1, 2),
    ast: Faker::Number.decimal(1, 2),
    stl: Faker::Number.decimal(1, 2),
    blk: Faker::Number.decimal(1, 2),
    tov: Faker::Number.decimal(1, 2),
    pf: Faker::Number.decimal(1, 2),
    pts: Faker::Number.decimal(2, 2)
  )
end
