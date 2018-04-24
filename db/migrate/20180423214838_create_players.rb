class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :name, null: false
      t.string :position, null: false
      t.string :team, null: false
      t.integer :height
      t.integer :weight
      t.integer :year
      t.date :birth
      t.integer :votes, default: 0

      t.timestamps
    end
  end
end
