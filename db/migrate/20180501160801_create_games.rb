class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :player_id
      t.integer :season
      t.integer :games
      t.integer :gamesStarted
      t.decimal :min
      t.decimal :fgM
      t.decimal :fgA
      t.decimal :fgP
      t.decimal :twoM
      t.decimal :twoA
      t.decimal :twoP
      t.decimal :threeM
      t.decimal :threeA
      t.decimal :threeP
      t.decimal :ftM
      t.decimal :ftA
      t.decimal :ftP
      t.decimal :oReb
      t.decimal :dReb
      t.decimal :tReb
      t.decimal :ast
      t.decimal :stl
      t.decimal :blk
      t.decimal :tov
      t.decimal :pf
      t.decimal :pts

      t.timestamps
    end
  end
end
