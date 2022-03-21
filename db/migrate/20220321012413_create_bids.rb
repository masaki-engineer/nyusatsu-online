class CreateBids < ActiveRecord::Migration[6.1]
  def change
    create_table :bids do |t|
      t.string :rep_division, null: false
      t.string :rep_person,   null: false
      t.string :phone_number, null: false
      t.string :email,        null: false
      t.integer :price,       null: false
      t.references :company,  null: false, foreign_key: true
      t.references :project,  null: false, foreign_key: true
      t.timestamps
    end
  end
end
