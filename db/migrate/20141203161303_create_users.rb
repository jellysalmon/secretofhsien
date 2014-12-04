class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.integer :high_score
      t.string :access_token

      t.timestamps
    end
  end
end
