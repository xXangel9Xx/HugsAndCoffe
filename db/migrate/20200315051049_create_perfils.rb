class CreatePerfils < ActiveRecord::Migration[6.0]
  def change
    create_table :perfils do |t|
      t.string :name
      t.string :last_name
      t.integer :coffee
      t.integer :hugs
      t.integer :money
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
