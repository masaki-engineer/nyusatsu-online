class CreateSuccesses < ActiveRecord::Migration[6.1]
  def change
    create_table :successes do |t|

      t.timestamps
    end
  end
end
