class CreateSuccesses < ActiveRecord::Migration[6.1]
  def change
    create_table :successes do |t|
      t.references :company, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true
      t.references :bid,     null: false, foreign_key: true
      t.timestamps
    end
  end
end
