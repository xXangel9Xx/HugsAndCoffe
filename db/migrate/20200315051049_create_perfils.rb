class CreatePerfils < ActiveRecord::Migration[6.0]
  def change
    create_table :perfils do |t|
      t.boolean :public, default: false
      t.integer :amountCoffe
      t.text :currencySymbol
      t.string :full_name
      t.string :ocupacion
      t.text :biografia
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
