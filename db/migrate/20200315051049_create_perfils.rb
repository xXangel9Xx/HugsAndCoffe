class CreatePerfils < ActiveRecord::Migration[6.0]
  def change
    create_table :perfils do |t|
      t.string :name
      t.string :last_name
      t.integer :coffee, default:0
      t.integer :hugs, default:0
      t.integer :money, default:0
 #     t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
