class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name,             null: false
      t.integer :category_id,     null: false
      t.text :overview,           null: false
      t.text :qualification,      null: false
      t.date :bid_date,           null: false
      t.string :rep_division,     null: false
      t.string :rep_person,       null: false
      t.string :phone_number,     null: false
      t.string :email,            null: false
      t.string :url
      t.references :municipality, null: false, foreign_key: true
      t.timestamps
    end
  end
end
