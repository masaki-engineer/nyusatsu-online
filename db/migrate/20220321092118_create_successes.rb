class CreateSuccesses < ActiveRecord::Migration[6.1]
  def change
    create_table :successes do |t|
      t.references :bid,     null: false, foreign_key: true, unique: true
      t.timestamps
    end
  end
end
