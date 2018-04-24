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
