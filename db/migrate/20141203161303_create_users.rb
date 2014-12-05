class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.integer :high_score, :default => 0
      t.string :access_token

      t.timestamps
    end
  end
end
